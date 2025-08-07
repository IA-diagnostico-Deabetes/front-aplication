# 🧠 Predicción de Diabetes con IA (Random Forest)

Este proyecto consiste en el desarrollo de un modelo de **inteligencia artificial** basado en el algoritmo **Random Forest**, diseñado para predecir la presencia de **diabetes** en pacientes a partir de variables clínicas. La solución fue desarrollada como parte de [nombre del curso, trabajo, empresa, etc.].

---

## 📌 Objetivo

Desarrollar un modelo preciso y explicable de machine learning para asistir en el diagnóstico temprano de **diabetes tipo 2**, utilizando datos médicos estructurados y técnicas de clasificación supervisada.

---

## 🧰 Tecnologías y herramientas utilizadas

- **Python 3.x**
- **Pandas, NumPy** – Manipulación de datos
- **Scikit-learn** – Modelado y evaluación
- **Matplotlib, Seaborn** – Visualización
- **Jupyter Notebook** – Desarrollo
- **Random Forest Classifier** – Algoritmo principal
---


## 📂 Fuente de los datos

Este proyecto utiliza el dataset **Diabetes Data Set**, publicado por el usuario **mathchi** en Kaggle. El conjunto de datos contiene información clínica de pacientes y está diseñado para tareas de clasificación binaria (diabetes: sí/no).

> **Referencia (formato APA):**  
> mathchi. (s. f.). *Diabetes Data Set* [Dataset]. Kaggle. Recuperado el 6 de agosto de 2025, de https://www.kaggle.com/datasets/mathchi/diabetes-data-set



## 📊 Datos

El dataset incluye variables como:

- Número de embarazos
- Nivel de glucosa
- Presión arterial
- Espesor de piel
- Niveles de insulina
- Índice de masa corporal (BMI)
- Edad
- Historial de diabetes en la familia
- Acanthosis
- Polidipsia

> **Variable objetivo:** Diagnóstico de diabetes (`0` = No, `1` = Sí)

---

## ⚙️ Proceso de desarrollo

1. **Carga y exploración de datos**
2. **Preprocesamiento:**
   - Limpieza de valores extremos o nulos
   - Estandarización de variables
3. **División del dataset** en entrenamiento y prueba
4. **Entrenamiento del modelo** con `RandomForestClassifier`
5. **Evaluación:**
   - Matriz de confusión
   - Accuracy, Precision, Recall, F1-score
   - Curva ROC y AUC
6. **Interpretabilidad del modelo:**
   - Importancia de variables
   - Análisis de errores

---

## 🧪 Resultados

- **Accuracy del modelo:** ~77%
- **AUC ROC:** 77
- Variables más importantes:
   1. Pregnancies
   2. Glucose
   3. BloodPressure
   4. SkinThickness
   5. Insulin
   6. BMI
   7. DiabetesPedigreeFunction
   8. Age
   9. Acanthosis
   10. Polydipsia


> El modelo mostró buen desempeño general, especialmente en la detección de casos positivos, lo cual es crítico en contextos médicos.

---



## 🧑‍💻 Autor

**Nombre:** 

**Contacto:** 

**Año:** 2025



