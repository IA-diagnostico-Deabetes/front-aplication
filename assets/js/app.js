addEventListener("DOMContentLoaded", (event) => { 

  // Inicializar tooltips Bootstrap
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
      new bootstrap.Tooltip(el);
  });

  // Configuración endpoints
  const ENV = "production"; // Cambiar a "production" o "local" para producción

  const ENDPOINTS = {
    local: "http://localhost:5000/predict",
    production: "https://test.qihotels.net/predict"
  };

  const form = document.getElementById("diabetes-form");
  const loading = document.getElementById("loading");
  const resultDiv = document.getElementById("result");
  const submitBtn = document.getElementById("submit-btn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    resultDiv.style.display = "none";
    loading.style.display = "block";
    submitBtn.disabled = true;

    // Recoger datos
    const data = {
      Age: parseFloat(form.Age.value),
      Pregnancies: parseFloat(form.Pregnancies.value),
      Glucose: parseFloat(form.Glucose.value),
      BloodPressure: parseFloat(form.BloodPressure.value),
      SkinThickness: parseFloat(form.SkinThickness.value),
      Insulin: parseFloat(form.Insulin.value),
      BMI: parseFloat(form.BMI.value.replace(",", ".")),
      DiabetesPedigreeFunction: parseFloat(form.DiabetesPedigreeFunction.value.replace(",", ".")),
      Acanthosis: form.Acanthosis.checked ? 1 : 0,
      Polydipsia: form.Polydipsia.checked ? 1 : 0
    };
    console.log("Datos enviados:", data);

    try {
      const response = await axios.post(ENDPOINTS[ENV], data);

      loading.style.display = "none";
      submitBtn.disabled = false;

      if (response.data && response.data.prediccion !== undefined) {
        const outcome = response.data.prediccion;

        
        resultDiv.style.display = "block";
        if (outcome === 1) {
          resultDiv.textContent = "Predicción: Diabético.";
          resultDiv.className = "result positive";
        } else if (outcome === 0) {
          resultDiv.textContent = "Predicción: No diabético.";
          resultDiv.className = "result negative";
        } else {
          resultDiv.textContent = "Respuesta inesperada del servidor.";
          resultDiv.className = "result";
        }
      } else {
        resultDiv.style.display = "block";
        resultDiv.textContent = "No se recibió un resultado válido.";
        resultDiv.className = "result";
      }
    } catch (error) {
      loading.style.display = "none";
      submitBtn.disabled = false;
      resultDiv.style.display = "block";
      resultDiv.textContent = "Error al conectar con el servicio: " + (error.response?.data?.message || error.message);
      resultDiv.className = "result";
    }
  });

})
