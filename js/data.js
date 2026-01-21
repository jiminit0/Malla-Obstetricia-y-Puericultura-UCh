const cursos = [
    {
        nombre: "QUÍMICA GENERAL Y ORGÁNICA",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: [],
        creditos: 4
    },
    {
        nombre: "BIOLOGÍA CELULAR Y GENÉTICA",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: [],
        creditos: 7
    },
    {
        nombre: "MATEMÁTICAS",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: [],
        creditos: 3
    },
  {
        nombre: "FUNDAMENTOS HUMANISTAS PARA LA ATENCIÓN EN SALUD SEXUAL Y REPRODUCTIVA",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: [],
        creditos: 6
    },
    {
        nombre: "DEMOGRAFÍA Y EPIDEMIOLOGÍA",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: [],
        creditos: 7
    }, 
    {
        nombre: "FORMACIÓN GENERAL 1",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: [],
        creditos: 2
    },
    {
        nombre: "BIOQUÍMICA DEL METABOLISMO HUMANO",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: ["QUÍMICA GENERAL Y ORGÁNICA"],
        creditos: 3
    },
    {
        nombre: "FÍSICA",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: ["MATEMÁTICAS"],
        creditos: 3
    },
    {
        nombre: "ANATOMÍA",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: [],
        creditos: 5
    },
    { 
        nombre: "HISTOLOGÍA Y EMBRIOLOGÍA",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: [],
        creditos: 5
    },
  { 
        nombre: "MATRONERÍA APLICADA 1",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: ["MATEMÁTICAS"],
        creditos: 7
    },
  { 
        nombre: "GESTIÓN Y LIDERAZGO EN SALUD",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: [],
        creditos: 5
    },
  { 
        nombre: "INGLÉS 1",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: [],
        creditos: 3
    },
  { 
        nombre: "FISIOLOGÍA GENERAL",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["ANATOMÍA","BIOLOGÍA CELULAR Y GENÉTICA","FÍSICA"],
        creditos: 4
    },
  { 
        nombre: "SALUD SEXUAL Y SEXUALIDAD",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["FUNDAMENTOS HUMANISTAS PARA LA ATENCIÓN EN SALUD SEXUAL Y REPRODUCTIVA"],
        creditos: 4
    },{ 
        nombre: "EDUCACIÓN EN SALUD",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["FUNDAMENTOS HUMANISTAS PARA LA ATENCIÓN EN SALUD SEXUAL Y REPRODUCTIVA"],
        creditos: 5
    },
  { 
        nombre: "MATRONERÍA APLICADA 2",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["MATRONERÍA APLICADA 1"],
        creditos: 6
    },
  { 
        nombre: "SALUD FAMILIAR Y COMUNITARIA 1",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["DEMOGRAFÍA Y EPIDEMIOLOGÍA"],
        creditos: 4
    },
  { 
        nombre: "HABILIDADES PSICOSOCIALES PARA LA ATENCIÓN EN SALUD",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["GESTIÓN Y LIDERAZGO EN SALUD"],
        creditos: 4
    },
  { 
        nombre: "INGLÉS 2",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["INGLÉS 1"],
        creditos: 3
    },
  { 
        nombre: "FISIOLOGÍA DE SISTEMAS",
        semestre: "Año 2 - Semestre 2",
        prerrequisitos: ["FISIOLOGÍA GENERAL","BIOQUÍMICA DEL METABOLISMO HUMANO","HISTOLOGÍA Y EMBRIOLOGÍA"],
        creditos: 6
    },
  { 
        nombre: "MICROBIOLOGÍA 1 Y FARMACOLOGÍA GENERAL",
        semestre: "Año 2 - Semestre 2",
        prerrequisitos: ["BIOLOGÍA CELULAR Y GENÉTICA"],
        creditos: 4
    },
  { 
        nombre: "GINECOLOGÍA 1",
        semestre: "Año 2 - Semestre 2",
        prerrequisitos: ["SALUD SEXUAL Y SEXUALIDAD"],
        creditos: 5
    },
  { 
        nombre: "OBSTETRICIA 1",
        semestre: "Año 2 - Semestre 2",
        prerrequisitos: ["MATRONERÍA APLICADA 2","HISTOLOGÍA Y EMBRIOLOGÍA"],
        creditos: 6
    },
  { 
        nombre: "NEONATOLOGÍA 1",
        semestre: "Año 2 - Semestre 2",
        prerrequisitos: ["MATRONERÍA APLICADA 2"],
        creditos: 6
    },
  { 
        nombre: "INGLÉS 3",
        semestre: "Año 2 - Semestre 2",
        prerrequisitos: ["INGLÉS 2"],
        creditos: 3
    },
   { 
        nombre: "CLÍNICA PARTOS 1",
        semestre: "Año 3 - Semestre 1",
        prerrequisitos: ["OBSTETRICIA 1","MICROBIOLOGÍA 1 Y FARMACOLOGÍA GENERAL"],
        creditos: 4
    },
  { 
        nombre: "CLÍNICA NEONATOLOGÍA 1",
        semestre: "Año 3 - Semestre 1",
        prerrequisitos: ["NEONATOLOGÍA 1","MICROBIOLOGÍA 1 Y FARMACOLOGÍA GENERAL"],
        creditos: 4
    },
  { 
        nombre: "CLÍNICA ATENCIÓN PRIMARIA EN SALUD 1",
        semestre: "Año 3 - Semestre 1",
        prerrequisitos: ["OBSTETRICIA 1","GINECOLOGÍA 1","SALUD FAMILIAR Y COMUNITARIA 1"],
        creditos: 4
    },
  { 
        nombre: "CLÍNICA PUERPERIO",
        semestre: "Año 3 - Semestre 1",
        prerrequisitos: ["OBSTETRICIA 1","MICROBIOLOGÍA 1 Y FARMACOLOGÍA GENERAL"],
        creditos: 4
    },
  { 
        nombre: "CLÍNICA GINECOLOGÍA 1",
        semestre: "Año 3 - Semestre 1",
        prerrequisitos: ["GINECOLOGÍA 1","MICROBIOLOGÍA 1 Y FARMACOLOGÍA GENERAL"],
        creditos: 4
    },
  { 
        nombre: "DISEÑOS DE INVESTIGACIÓN",
        semestre: "Año 3 - Semestre 1",
        prerrequisitos: ["DEMOGRAFÍA Y EPIDEMIOLOGÍA"],
        creditos: 6
    },
  { 
        nombre: "EDUCACIÓN INTERPROFESIONAL Y PRÁCTICA COLABORATIVA 1",
        semestre: "Año 3 - Semestre 1",
        prerrequisitos: [],
        creditos: 3
    },
  { 
        nombre: "FISIOPATOLOGÍA Y FARMACOLOGÍA DE SISTEMAS",
        semestre: "Año 3 - Semestre 2",
        prerrequisitos: ["MICROBIOLOGÍA 1 Y FARMACOLOGÍA GENERAL"],
        creditos: 6
    },
  { 
        nombre: "MICROBIOLOGÍA 2",
        semestre: "Año 3 - Semestre 2",
        prerrequisitos: ["MICROBIOLOGÍA 1 Y FARMACOLOGÍA GENERAL"],
        creditos: 3
    },
  { 
        nombre: "NEONATOLOGÍA 2",
        semestre: "Año 3 - Semestre 2",
        prerrequisitos: ["CLÍNICA NEONATOLOGÍA 1"],
        creditos: 5
    },
  { 
        nombre: "SALUD FAMILIAR Y COMUNITARIA 2",
        semestre: "Año 3 - Semestre 2",
        prerrequisitos: ["CLÍNICA ATENCIÓN PRIMARIA EN SALUD 1"],
        creditos: 5
    },
  { 
        nombre: "OBSTETRICIA 2",
        semestre: "Año 3 - Semestre 2",
        prerrequisitos: ["CLÍNICA ATENCIÓN PRIMARIA EN SALUD 1", "CLÍNICA PUERPERIO","CLÍNICA PARTOS 1"],
        creditos: 5
    },
  { 
        nombre: "IDENTIDAD Y RESPONSABILIDAD PROFESIONAL EN SALUD",
        semestre: "Año 3 - Semestre 2",
        prerrequisitos: ["HABILIDADES PSICOSOCIALES PARA LA ATENCIÓN EN SALUD"],
        creditos: 4
    },
  { 
        nombre: "BASES CONCEPTUALES PARA LA PRÁCTICA BASADA EN EVIDENCIA",
        semestre: "Año 3 - Semestre 2",
        prerrequisitos: ["DISEÑOS DE INVESTIGACIÓN"],
        creditos: 3
    },
  { 
        nombre: "CLÍNICA DE INTERVENCIONES EDUCATIVAS",
        semestre: "Año 4 - Semestre 1",
        prerrequisitos: ["SALUD FAMILIAR Y COMUNITARIA 2","BASES CONCEPTUALES PARA LA PRÁCTICA BASADA EN EVIDENCIA","EDUCACIÓN EN SALUD"],
        creditos: 4
    },
  { 
        nombre: "MATRONERÍA MÉDICO QUIRÚRGICA",
        semestre: "Año 4 - Semestre 1",
        prerrequisitos: ["OBSTETRICIA 2","NEONATOLOGÍA 2","CLÍNICA GINECOLOGÍA 1"],
        creditos: 8
    },
  { 
        nombre: "GINECOLOGÍA 2",
        semestre: "Año 4 - Semestre 1",
        prerrequisitos: ["CLÍNICA GINECOLOGÍA 1"],
        creditos: 6
    },
    { 
        nombre: "GESTIÓN CLÍNICA Y LIDERAZGO EN MATRONERÍA",
        semestre: "Año 4 - Semestre 1",
        prerrequisitos: ["IDENTIDAD Y RESPONSABILIDAD PROFESIONAL EN SALUD","BASES CONCEPTUALES PARA LA PRÁCTICA BASADA EN EVIDENCIA"],
        creditos: 5
    },
    {
        nombre: "SEMINARIO UNIDAD DE INVESTIGACIÓN 1",
        semestre: "Año 4 - Semestre 1",
        prerrequisitos: ["BASES CONCEPTUALES PARA LA PRÁCTICA BASADA EN EVIDENCIA"],
        creditos: 3
    },
     {
        nombre: "FORMACIÓN GENERAL 2",
        semestre: "Año 4 - Semestre 1",
        prerrequisitos: [],
        creditos: 2
    },
    {
        nombre: "FORMACIÓN GENERAL 3",
        semestre: "Año 4 - Semestre 1",
        prerrequisitos: [],
        creditos: 2
    },
{
        nombre: "CLÍNICA ALTO RIESGO OBSTÉTRICO",
        semestre: "Año 4 - Semestre 2",
        prerrequisitos: ["MATRONERÍA MÉDICO QUIRÚRGICA"],
        creditos: 5
    },
  {
        nombre: "CLÍNICA PARTOS 2",
        semestre: "Año 4 - Semestre 2",
        prerrequisitos: ["MATRONERÍA MÉDICO QUIRÚRGICA"],
        creditos: 5
    },
  {
        nombre: "CLÍNICA GINECOLOGÍA 2",
        semestre: "Año 4 - Semestre 2",
        prerrequisitos: ["MATRONERÍA MÉDICO QUIRÚRGICA","GINECOLOGÍA 2"],
        creditos: 5
    },
    {
        nombre: "CLÍNICA NEONATAL 2",
        semestre: "Año 4 - Semestre 2",
        prerrequisitos: ["MATRONERÍA MÉDICO QUIRÚRGICA"],
        creditos: 5
    },
    {
        nombre: "CLÍNICA ATENCIÓN PRIMARIA EN SALUD 2",
        semestre: "Año 4 - Semestre 2",
        prerrequisitos: ["MATRONERÍA MÉDICO QUIRÚRGICA","GINECOLOGÍA 2", "CLÍNICA DE INTERVENCIONES EDUCATIVAS"],
        creditos: 5
    },
  {
        nombre: "SEMINARIO UNIDAD DE INVESTIGACIÓN 2",
        semestre: "Año 4 - Semestre 2",
        prerrequisitos: ["SEMINARIO UNIDAD DE INVESTIGACIÓN 1"],
        creditos: 2
    },
        {
        nombre: "EDUCACIÓN INTERPROFESIONAL Y PRÁCTICA COLABORATIVA 2",
        semestre: "Año 4 - Semestre 2",
        prerrequisitos: ["EDUCACIÓN INTERPROFESIONAL Y PRÁCTICA COLABORATIVA 1"],
        creditos: 3
    },
    {
      nombre: "INTERNADO GINECOLOGÍA",
      creditos: 12,
      semestre: "Año 5",
      prerrequisitos: [],
      semestreExacto: "Ambos",
      creditosMinimos: 240
    },
    {
      nombre: "INTERNADO NEONATOLOGÍA",
      creditos: 12,
      semestre: "Año 5",
      prerrequisitos: [],
      semestreExacto: "Ambos",
      creditosMinimos: 240
    },
    {
      nombre: "INTERNADO OBSTETRICIA",
      creditos: 12,
      semestre: "Año 5",
      prerrequisitos: [],
      semestreExacto: "Ambos",
      creditosMinimos: 240
    },
    {
      nombre: "INTERNADO ATENCIÓN PRIMARIA EN SALUD",
      creditos: 12,
      semestre: "Año 5",
      prerrequisitos: [],
      semestreExacto: "Ambos",
      creditosMinimos: 240
    },
    {
      nombre: "INTERNADO ELECTIVO",
      creditos: 12,
      semestre: "Año 5",
      semestreExacto: "Ambos",
      creditosMinimos: 240
    }
];
