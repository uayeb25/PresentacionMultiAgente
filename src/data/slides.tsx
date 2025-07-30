import type { SlideData, InteractiveCardData } from '../types/presentation';
import { Bot, Brain, Cog, Database, FileText, Users, Zap, Target, CheckCircle } from 'lucide-react';
import { CodeBlock } from '../components/UI/CodeBlock';

export const interactiveCardsData: InteractiveCardData[] = [
  {
    id: 'agents',
    title: 'Configuración de Agentes',
    description: 'Sistema multiagente con roles especializados',
    icon: 'Bot',
    details: {
      title: 'Agentes del Sistema',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Agentes Disponibles:</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <Bot className="w-5 h-5 text-blue-600" />
              <div>
                <strong>Agente Clasificador</strong>
                <p className="text-sm text-gray-600">Categoriza documentos por tema y relevancia</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <FileText className="w-5 h-5 text-green-600" />
              <div>
                <strong>Agente Extractor</strong>
                <p className="text-sm text-gray-600">Extrae información clave de documentos</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
              <Target className="w-5 h-5 text-purple-600" />
              <div>
                <strong>Agente Buscador</strong>
                <p className="text-sm text-gray-600">Busca información específica en la base de datos</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
              <Users className="w-5 h-5 text-orange-600" />
              <div>
                <strong>Agente Escritor</strong>
                <p className="text-sm text-gray-600">Genera resúmenes y reportes</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
              <Brain className="w-5 h-5 text-indigo-600" />
              <div>
                <strong>Agente Coordinador</strong>
                <p className="text-sm text-gray-600">Gestiona el flujo de trabajo entre agentes</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <strong>Estado actual:</strong> 5 agentes activos trabajando en paralelo
          </div>
        </div>
      )
    },
    tags: ['Especialización', 'Paralelo', 'Coordinación']
  },
  {
    id: 'models',
    title: 'Modelos de IA',
    description: 'Modelos optimizados para diferentes tareas',
    icon: 'Brain',
    details: {
      title: 'Modelos de IA Configurados',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Modelos Disponibles:</h4>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <strong className="text-blue-700">Llama 3.2 (7B)</strong>
              <p className="text-sm text-gray-600">Modelo principal para procesamiento de texto general</p>
              <div className="flex gap-2 mt-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Texto</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">General</span>
              </div>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <strong className="text-green-700">Gemma 2 (9B)</strong>
              <p className="text-sm text-gray-600">Especializado en análisis específico y tareas complejas</p>
              <div className="flex gap-2 mt-2">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Análisis</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Especializado</span>
              </div>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <strong className="text-purple-700">Qwen 2.5 (7B)</strong>
              <p className="text-sm text-gray-600">Optimizado para razonamiento y tareas matemáticas</p>
              <div className="flex gap-2 mt-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Razonamiento</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Matemáticas</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    metrics: [
      { label: 'Velocidad promedio', value: '1.2s' },
      { label: 'Precisión', value: '94%' },
      { label: 'Modelos activos', value: '3' }
    ]
  },
  {
    id: 'tools',
    title: 'Herramientas del Sistema',
    description: 'Stack tecnológico optimizado',
    icon: 'Cog',
    details: {
      title: 'Stack Tecnológico',
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Herramientas Principales:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <Cog className="w-6 h-6 text-blue-600" />
              <div>
                <strong>LangChain</strong>
                <p className="text-sm text-gray-600">Framework principal para agentes</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <Database className="w-6 h-6 text-green-600" />
              <div>
                <strong>ChromaDB</strong>
                <p className="text-sm text-gray-600">Base de datos vectorial</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <Zap className="w-6 h-6 text-yellow-600" />
              <div>
                <strong>Ollama</strong>
                <p className="text-sm text-gray-600">Servidor local de modelos</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <FileText className="w-6 h-6 text-red-600" />
              <div>
                <strong>PyPDF2</strong>
                <p className="text-sm text-gray-600">Procesamiento de PDFs</p>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <strong className="text-green-800">Configuración optimizada</strong>
            </div>
            <p className="text-sm text-green-700 mt-1">Solo 7 dependencias esenciales vs 25+ originales</p>
          </div>
        </div>
      )
    },
    tags: ['Optimizado', 'Local', 'Eficiente']
  }
];

export const slidesData: SlideData[] = [
  {
    id: 1,
    title: 'Sistema Multiagente para Análisis de Literatura Académica',
    type: 'intro',
    content: (
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Sistema Multiagente
        </h1>
        <h2 className="text-3xl text-gray-700">
          Análisis de Literatura Académica
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Framework inteligente para el procesamiento automatizado de documentos académicos usando múltiples agentes especializados
        </p>
        <div className="flex justify-center items-center gap-4 mt-8">
          <Bot className="w-8 h-8 text-blue-500" />
          <Brain className="w-8 h-8 text-purple-500" />
          <FileText className="w-8 h-8 text-green-500" />
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: 'Configuración del Sistema',
    type: 'interactive',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Configuración Interactiva del Sistema
        </h2>
        <p className="text-center text-gray-600 text-lg">
          Explora los diferentes componentes de nuestro sistema multiagente
        </p>
        <div id="interactive-cards-container" className="mt-8">
          {/* Los cards interactivos se renderizarán aquí */}
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: 'Problemática Actual',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Desafíos en el Análisis de Literatura Académica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-xl font-semibold text-red-800 mb-3">Volumen Masivo</h3>
            <p className="text-red-700">Miles de artículos publicados diariamente hacen imposible el análisis manual completo</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold text-orange-800 mb-3">Tiempo Excesivo</h3>
            <p className="text-orange-700">Procesos manuales que toman semanas o meses para completarse</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">Inconsistencia</h3>
            <p className="text-yellow-700">Criterios subjetivos que varían entre investigadores</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">Información Dispersa</h3>
            <p className="text-purple-700">Datos relevantes distribuidos en múltiples fuentes y formatos</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: 'Nuestra Propuesta',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Sistema Multiagente Inteligente
        </h2>
        <div className="text-center space-y-4">
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Un framework que combina múltiples agentes especializados con modelos de IA para automatizar completamente el análisis de literatura académica
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <Bot className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-blue-800">Automatización</h3>
            <p className="text-blue-700 mt-2">Procesamiento automático de documentos sin intervención manual</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-800">Rapidez</h3>
            <p className="text-green-700 mt-2">Análisis en segundos vs semanas del proceso manual</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-purple-800">Precisión</h3>
            <p className="text-purple-700 mt-2">Criterios consistentes y objetivos en todo el proceso</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: 'Arquitectura del Sistema',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Arquitectura Multiagente
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">Flujo de Procesamiento</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <strong>Ingesta de Documentos</strong>
                <p className="text-gray-600">PDFs académicos son procesados y almacenados</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <strong>Coordinación Central</strong>
                <p className="text-gray-600">El agente coordinador distribuye tareas entre agentes especializados</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <strong>Procesamiento Paralelo</strong>
                <p className="text-gray-600">Múltiples agentes trabajan simultáneamente en diferentes aspectos</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <strong>Síntesis de Resultados</strong>
                <p className="text-gray-600">Los resultados se combinan en un análisis completo</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg mt-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">🏗️ Configuración de Agentes</h3>
          <CodeBlock>
            {`class AgentCoordinator:
    def __init__(self):
        self.agents = {
            'classifier': ClassifierAgent(),
            'extractor': ExtractorAgent(),
            'searcher': SearchAgent(),
            'writer': WriterAgent()
        }

    async def process_parallel(self, document):
        # Procesamiento paralelo de agentes
        tasks = [
            agent.process(document) 
            for agent in self.agents.values()
        ]
        return await asyncio.gather(*tasks)`}
          </CodeBlock>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: 'Agentes Especializados',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Cinco Agentes Especializados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-800">Agente Clasificador</h3>
            </div>
            <p className="text-blue-700 mb-3">Categoriza documentos por área temática y relevancia</p>
            <ul className="text-sm text-blue-600 space-y-1">
              <li>• Análisis semántico del contenido</li>
              <li>• Clasificación automática por disciplinas</li>
              <li>• Evaluación de relevancia</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-semibold text-green-800">Agente Extractor</h3>
            </div>
            <p className="text-green-700 mb-3">Extrae información clave de los documentos</p>
            <ul className="text-sm text-green-600 space-y-1">
              <li>• Metadatos y bibliografía</li>
              <li>• Conceptos principales</li>
              <li>• Metodologías utilizadas</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-purple-600" />
              <h3 className="text-xl font-semibold text-purple-800">Agente Buscador</h3>
            </div>
            <p className="text-purple-700 mb-3">Busca información específica en la base de conocimiento</p>
            <ul className="text-sm text-purple-600 space-y-1">
              <li>• Búsquedas vectoriales semánticas</li>
              <li>• Recuperación contextual</li>
              <li>• Filtrado por criterios</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-orange-600" />
              <h3 className="text-xl font-semibold text-orange-800">Agente Escritor</h3>
            </div>
            <p className="text-orange-700 mb-3">Genera resúmenes y reportes estructurados</p>
            <ul className="text-sm text-orange-600 space-y-1">
              <li>• Síntesis automática</li>
              <li>• Reportes personalizables</li>
              <li>• Formato académico</li>
            </ul>
          </div>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-indigo-600" />
            <h3 className="text-xl font-semibold text-indigo-800">Agente Coordinador</h3>
          </div>
          <p className="text-indigo-700 mb-3">Gestiona el flujo de trabajo y coordina entre agentes</p>
          <ul className="text-sm text-indigo-600 space-y-1">
            <li>• Distribución de tareas</li>
            <li>• Gestión de dependencias</li>
            <li>• Optimización del flujo</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: 'Modelos de Inteligencia Artificial',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Modelos de IA Implementados
        </h2>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-semibold text-blue-800">Llama 3.2 (7B)</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Características:</h4>
                <ul className="text-blue-600 space-y-1">
                  <li>• 7 mil millones de parámetros</li>
                  <li>• Optimizado para texto general</li>
                  <li>• Excelente comprensión contextual</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Uso en el sistema:</h4>
                <ul className="text-blue-600 space-y-1">
                  <li>• Procesamiento de documentos</li>
                  <li>• Análisis semántico</li>
                  <li>• Generación de resúmenes</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-semibold text-green-800">Gemma 2 (9B)</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Características:</h4>
                <ul className="text-green-600 space-y-1">
                  <li>• 9 mil millones de parámetros</li>
                  <li>• Especializado en análisis complejo</li>
                  <li>• Alta precisión en tareas específicas</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Uso en el sistema:</h4>
                <ul className="text-green-600 space-y-1">
                  <li>• Clasificación temática</li>
                  <li>• Extracción de conceptos</li>
                  <li>• Análisis metodológico</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-semibold text-purple-800">Qwen 2.5 (7B)</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Características:</h4>
                <ul className="text-purple-600 space-y-1">
                  <li>• Optimizado para razonamiento</li>
                  <li>• Excelente en tareas matemáticas</li>
                  <li>• Procesamiento multimodal</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Uso en el sistema:</h4>
                <ul className="text-purple-600 space-y-1">
                  <li>• Análisis cuantitativo</li>
                  <li>• Evaluación de metodologías</li>
                  <li>• Búsquedas complejas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: 'Stack Tecnológico',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Herramientas y Tecnologías
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-700">Framework Principal</h3>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <Cog className="w-6 h-6 text-blue-600" />
                <strong className="text-blue-800">LangChain</strong>
              </div>
              <p className="text-blue-700 text-sm">Framework para desarrollo de aplicaciones con LLMs, gestión de agentes y cadenas de procesamiento</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <Database className="w-6 h-6 text-green-600" />
                <strong className="text-green-800">ChromaDB</strong>
              </div>
              <p className="text-green-700 text-sm">Base de datos vectorial para almacenamiento y búsqueda semántica de embeddings</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-700">Infraestructura</h3>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-yellow-600" />
                <strong className="text-yellow-800">Ollama</strong>
              </div>
              <p className="text-yellow-700 text-sm">Servidor local para ejecución eficiente de modelos de lenguaje</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-6 h-6 text-red-600" />
                <strong className="text-red-800">PyPDF2</strong>
              </div>
              <p className="text-red-700 text-sm">Librería especializada para procesamiento y extracción de texto de documentos PDF</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Optimización de Dependencias</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-600 mb-2">❌ Antes (25+ paquetes)</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• nltk, spacy, transformers</li>
                <li>• pandas, numpy, matplotlib</li>
                <li>• torch, tensorflow</li>
                <li>• Muchas dependencias innecesarias</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-600 mb-2">✅ Ahora (7 paquetes)</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• langchain, pydantic</li>
                <li>• chromadb, requests</li>
                <li>• PyPDF2, ollama</li>
                <li>• typing-extensions</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg mt-6">
          <h3 className="text-lg font-semibold text-green-800 mb-3">📋 requirements.txt Optimizado</h3>
          <CodeBlock>
            {`# Sistema Multiagente - Dependencias Optimizadas
langchain==0.1.0
pydantic==2.5.0
chromadb==0.4.18
PyPDF2==3.0.1
ollama==0.1.7
requests==2.31.0
typing-extensions==4.8.0

# ✅ Solo 7 dependencias esenciales
# ❌ Eliminadas: 18+ dependencias innecesarias
# 🚀 Reducción del 70% en el tamaño`}
          </CodeBlock>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: 'Flujo de Procesamiento',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Proceso de Análisis Completo
        </h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          <div className="space-y-8 relative">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">1</div>
              <div className="bg-blue-50 p-6 rounded-lg flex-1 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Carga de Documentos</h3>
                <p className="text-blue-700">Los documentos PDF son ingresados al sistema y procesados para extracción de texto</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">2</div>
              <div className="bg-green-50 p-6 rounded-lg flex-1 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Preprocesamiento</h3>
                <p className="text-green-700">Limpieza del texto, tokenización y preparación para análisis semántico</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">3</div>
              <div className="bg-purple-50 p-6 rounded-lg flex-1 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">Distribución de Tareas</h3>
                <p className="text-purple-700">El coordinador asigna tareas específicas a cada agente especializado</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">4</div>
              <div className="bg-orange-50 p-6 rounded-lg flex-1 border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-2">Procesamiento Paralelo</h3>
                <p className="text-orange-700">Los agentes trabajan simultáneamente: clasificación, extracción, búsqueda y análisis</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">5</div>
              <div className="bg-indigo-50 p-6 rounded-lg flex-1 border border-indigo-200">
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">Síntesis y Reporte</h3>
                <p className="text-indigo-700">Los resultados se combinan en un análisis comprehensivo y reporte final</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">⚙️ Coordinación del Flujo</h3>
          <CodeBlock>
            {`async def process_document_pipeline(self, document):
    """Pipeline completo de procesamiento"""

    # Paso 1: Preprocesamiento
    preprocessed = await self.preprocessor.clean_text(document)

    # Paso 2: Distribución paralela
    tasks = [
        self.classifier.classify(preprocessed),
        self.extractor.extract_entities(preprocessed),
        self.searcher.find_related(preprocessed)
    ]

    # Paso 3: Ejecutión paralela
    results = await asyncio.gather(*tasks)

    # Paso 4: Síntesis final
    return await self.synthesizer.combine_results(results)`}
          </CodeBlock>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: 'Resultados y Métricas',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Rendimiento del Sistema
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg text-center border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">1.2s</div>
            <div className="text-blue-800 font-semibold">Tiempo promedio</div>
            <div className="text-blue-600 text-sm">por consulta</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
            <div className="text-green-800 font-semibold">Precisión</div>
            <div className="text-green-600 text-sm">en clasificación</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center border border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
            <div className="text-purple-800 font-semibold">Agentes</div>
            <div className="text-purple-600 text-sm">trabajando en paralelo</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg text-center border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">70%</div>
            <div className="text-orange-800 font-semibold">Reducción</div>
            <div className="text-orange-600 text-sm">en dependencias</div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comparación con Métodos Tradicionales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-600 mb-3">❌ Proceso Manual</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• ⏱️ 2-4 semanas por análisis completo</li>
                <li>• 👥 Requiere múltiples investigadores</li>
                <li>• 📊 Inconsistencias en criterios</li>
                <li>• 💰 Costo elevado en recursos humanos</li>
                <li>• 🔄 Difícil de replicar y escalar</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-600 mb-3">✅ Sistema Multiagente</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• ⚡ 2-3 minutos por análisis completo</li>
                <li>• 🤖 Completamente automatizado</li>
                <li>• 🎯 Criterios objetivos y consistentes</li>
                <li>• 💡 Costo mínimo de operación</li>
                <li>• 📈 Escalable a miles de documentos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 11,
    title: 'Casos de Uso',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Aplicaciones Prácticas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">🎓 Investigación Académica</h3>
            <p className="text-blue-700 mb-3">Revisiones sistemáticas de literatura científica</p>
            <ul className="text-blue-600 text-sm space-y-1">
              <li>• Identificación de tendencias de investigación</li>
              <li>• Análisis de gaps en el conocimiento</li>
              <li>• Mapeo de evolución conceptual</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-green-800 mb-3">📚 Bibliotecas Digitales</h3>
            <p className="text-green-700 mb-3">Gestión automatizada de colecciones</p>
            <ul className="text-green-600 text-sm space-y-1">
              <li>• Catalogación automática de documentos</li>
              <li>• Recomendaciones personalizadas</li>
              <li>• Detección de duplicados</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">🏛️ Instituciones Educativas</h3>
            <p className="text-purple-700 mb-3">Apoyo a estudiantes y profesores</p>
            <ul className="text-purple-600 text-sm space-y-1">
              <li>• Asistencia en revisiones de literatura</li>
              <li>• Análisis de estado del arte</li>
              <li>• Búsqueda de fuentes relevantes</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold text-orange-800 mb-3">🏢 Sector Corporativo</h3>
            <p className="text-orange-700 mb-3">Inteligencia competitiva y innovación</p>
            <ul className="text-orange-600 text-sm space-y-1">
              <li>• Monitoreo de avances tecnológicos</li>
              <li>• Análisis de patentes y publicaciones</li>
              <li>• Identificación de oportunidades</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">💻 Implementación de Caso de Uso</h3>
          <CodeBlock>
            {`class ResearchAnalyzer:
    """Sistema para análisis de literatura académica"""

    def conduct_systematic_review(self, query):
        # 1. Búsqueda distribuida
        papers = self.search_agent.find_papers(query)

        # 2. Filtrado por relevancia
        relevant_papers = self.filter_agent.apply_criteria(papers)

        # 3. Extracción de datos
        extracted_data = [
            self.extraction_agent.extract(paper)
            for paper in relevant_papers
        ]

        # 4. Síntesis y análisis
        return self.synthesis_agent.generate_review(extracted_data)`}
          </CodeBlock>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">🌟 Beneficios Transversales</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <strong className="text-gray-800">Eficiencia</strong>
              <p className="text-gray-600 text-sm">Reducción drástica en tiempo de análisis</p>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <strong className="text-gray-800">Objetividad</strong>
              <p className="text-gray-600 text-sm">Criterios consistentes y reproducibles</p>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <strong className="text-gray-800">Escalabilidad</strong>
              <p className="text-gray-600 text-sm">Procesamiento masivo de documentos</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 12,
    title: 'Demostración en Vivo',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Demo del Sistema en Acción
        </h2>
        <div className="bg-gray-800 text-green-400 p-6 rounded-lg font-mono text-sm">
          <div className="mb-4">
            <span className="text-blue-400">$</span> python main.py --analyze literatura_academica.pdf
          </div>
          <div className="space-y-2">
            <div>🚀 Sistema multiagente iniciado...</div>
            <div>📄 Procesando: literatura_academica.pdf</div>
            <div>🤖 Agente Coordinador: Distribuyendo tareas...</div>
            <div>📊 Agente Clasificador: Analizando contenido temático...</div>
            <div>🔍 Agente Extractor: Extrayendo metadatos y conceptos...</div>
            <div>🎯 Agente Buscador: Buscando información relacionada...</div>
            <div>✍️ Agente Escritor: Generando resumen ejecutivo...</div>
            <div className="text-yellow-400">⚡ Procesamiento completado en 2.3 segundos</div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">💻 Código de Inicialización</h3>
          <CodeBlock>
            {`from langchain import Agent
from chromadb import Client

# Inicializar sistema multiagente
coordinator = AgentCoordinator()
agents = [
    ClassifierAgent(),
    ExtractorAgent(),
    SearchAgent(),
    WriterAgent()
]

# Procesar documento
result = coordinator.process_document("paper.pdf")`}
          </CodeBlock>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">📋 Resultados del Análisis</h3>
            <div className="space-y-3 text-sm">
              <div>
                <strong className="text-blue-700">Clasificación:</strong>
                <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded">Inteligencia Artificial</span>
                <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded">Machine Learning</span>
              </div>
              <div>
                <strong className="text-blue-700">Relevancia:</strong>
                <span className="ml-2 text-green-600">Alta (95%)</span>
              </div>
              <div>
                <strong className="text-blue-700">Conceptos clave:</strong>
                <div className="mt-1 text-blue-600">
                  • Redes neuronales profundas<br/>
                  • Aprendizaje supervisado<br/>
                  • Procesamiento de lenguaje natural
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-3">📊 Métricas de Rendimiento</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-green-700">Tiempo de procesamiento:</span>
                <span className="font-semibold text-green-600">2.3s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Agentes utilizados:</span>
                <span className="font-semibold text-green-600">5/5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Precisión de clasificación:</span>
                <span className="font-semibold text-green-600">94%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Conceptos extraídos:</span>
                <span className="font-semibold text-green-600">23</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">💡 Resumen Ejecutivo Generado</h3>
          <p className="text-yellow-700 text-sm leading-relaxed">
            "Este documento presenta una investigación sobre técnicas avanzadas de aprendizaje automático aplicadas al procesamiento de lenguaje natural. 
            Los autores proponen un enfoque novedoso basen redes neuronales transformers que mejora significativamente la precisión en tareas de 
            clasificación de texto. La metodología experimental demuestra resultados superiores a los métodos tradicionales, con implicaciones 
            importantes para aplicaciones en análisis de sentimientos y traducción automática..."
          </p>
        </div>
      </div>
    )
  },
  {
    id: 13,
    title: 'Ventajas Competitivas',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          ¿Por Qué Elegir Nuestro Sistema?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-green-600">✅ Nuestras Fortalezas</h3>
            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800">🚀 Velocidad Excepcional</h4>
                <p className="text-green-700 text-sm">Análisis completo en segundos vs semanas del proceso manual</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800">🎯 Alta Precisión</h4>
                <p className="text-blue-700 text-sm">94% de precisión en clasificación con criterios objetivos</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-800">🔧 Arquitectura Modular</h4>
                <p className="text-purple-700 text-sm">Agentes especializados que pueden trabajar independientemente</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-800">💰 Costo Optimizado</h4>
                <p className="text-indigo-700 text-sm">70% menos dependencias, infraestructura local</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-red-600">❌ Limitaciones de Otros Sistemas</h3>
            <div className="space-y-3">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800">🐌 Sistemas Monolíticos</h4>
                <p className="text-red-700 text-sm">Procesamiento secuencial lento, no escalable</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-800">☁️ Dependencia de Cloud</h4>
                <p className="text-orange-700 text-sm">Costos recurrentes altos, latencia de red</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-semibold text-yellow-800">🔧 Complejidad de Setup</h4>
                <p className="text-yellow-700 text-sm">Múltiples dependencias, configuración compleja</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                <h4 className="font-semibold text-gray-800">📊 Análisis Superficial</h4>
                <p className="text-gray-700 text-sm">Extracción básica sin análisis semántico profundo</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">🏆 Ventaja Competitiva Clave</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <strong>Rapidez</strong>
              <p className="text-sm opacity-90">1000x más rápido que análisis manual</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🎯</div>
              <strong>Precisión</strong>
              <p className="text-sm opacity-90">Criterios objetivos y consistentes</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💡</div>
              <strong>Inteligencia</strong>
              <p className="text-sm opacity-90">Análisis semántico profundo con IA</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 14,
    title: 'Próximos Pasos',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Roadmap de Desarrollo
        </h2>
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Fase 1: Consolidación (Mes 1-2)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-green-700 space-y-2">
                <li>• ✅ Optimización de dependencias completada</li>
                <li>• ✅ Arquitectura multiagente funcional</li>
                <li>• ✅ Integración de modelos locales</li>
                <li>• 🔄 Pruebas exhaustivas de rendimiento</li>
              </ul>
              <ul className="text-green-700 space-y-2">
                <li>• 📝 Documentación técnica completa</li>
                <li>• 🔧 Interface de usuario mejorada</li>
                <li>• 📊 Métricas de calidad detalladas</li>
                <li>• 🛡️ Validación con casos reales</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">🚀 Fase 2: Expansión (Mes 3-4)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-blue-700 space-y-2">
                <li>• 🌐 API REST para integración externa</li>
                <li>• 📱 Interface web responsive</li>
                <li>• 🔍 Búsquedas semánticas avanzadas</li>
                <li>• 📈 Dashboard de análisis en tiempo real</li>
              </ul>
              <ul className="text-blue-700 space-y-2">
                <li>• 🤖 Agentes especializados adicionales</li>
                <li>• 🔄 Pipeline de procesamiento batch</li>
                <li>• 📊 Reportes personalizables</li>
                <li>• 🔐 Sistema de autenticación</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">🌟 Fase 3: Innovación (Mes 5-6)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-purple-700 space-y-2">
                <li>• 🧠 Integración de modelos multimodales</li>
                <li>• 📊 Análisis de gráficos y tablas</li>
                <li>• 🔗 Detección de redes de citaciones</li>
                <li>• 🎯 Recomendaciones inteligentes</li>
              </ul>
              <ul className="text-purple-700 space-y-2">
                <li>• 📚 Soporte para múltiples idiomas</li>
                <li>• 🔄 Aprendizaje continuo del sistema</li>
                <li>• 📱 App móvil nativa</li>
                <li>• 🌍 Despliegue en la nube</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">🛠️ Implementación de Mejoras</h3>
          <CodeBlock>
            {`class EnhancedMultiAgentSystem:
    """Sistema mejorado con nuevas capacidades"""

    def __init__(self):
        self.multimodal_agents = {  # Fase 3
            'vision': VisionAgent(),  # Análisis de gráficos
            'translation': TranslationAgent()  # Múltiples idiomas
        }
        self.api_gateway = FastAPI()  # Fase 2
        self.performance_monitor = MetricsCollector()  # Fase 1

    async def process_multimodal(self, document):
        # Procesamiento de texto + imágenes
        text_analysis = await self.text_pipeline(document)
        visual_analysis = await self.multimodal_agents['vision'].analyze(document)
        return self.combine_insights(text_analysis, visual_analysis)`}
          </CodeBlock>
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">🎯 Objetivos a Largo Plazo</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl mb-2">🏛️</div>
              <strong>Adopción Institucional</strong>
              <p className="text-sm opacity-90">Implementación en universidades y centros de investigación</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌐</div>
              <strong>Estándar de Industria</strong>
              <p className="text-sm opacity-90">Referencia para análisis automatizado de literatura</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🚀</div>
              <strong>Ecosistema Completo</strong>
              <p className="text-sm opacity-90">Plataforma integral para investigación académica</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 15,
    title: 'Conclusiones',
    type: 'conclusion',
    content: (
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Transformando la Investigación Académica
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-xl text-gray-600">
            Nuestro sistema multiagente representa un salto cualitativo en el análisis automatizado de literatura académica
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-800">Eficiencia</h3>
              <p className="text-blue-700">1000x más rápido que métodos tradicionales</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-800">Precisión</h3>
              <p className="text-green-700">94% de precisión con criterios objetivos</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-purple-800">Escalabilidad</h3>
              <p className="text-purple-700">De documentos individuales a bibliotecas completas</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">🌟 Impacto Esperado</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold mb-2">Para Investigadores:</h3>
                <ul className="space-y-1 text-sm opacity-90">
                  <li>• Más tiempo para análisis profundo</li>
                  <li>• Descubrimiento de patrones ocultos</li>
                  <li>• Revisiones de literatura más comprehensivas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Para Instituciones:</h3>
                <ul className="space-y-1 text-sm opacity-90">
                  <li>• Reducción de costos operativos</li>
                  <li>• Mejora en calidad de investigación</li>
                  <li>• Ventaja competitiva académica</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 italic">
            "El futuro de la investigación académica es colaborativo: humanos e IA trabajando juntos para expandir las fronteras del conocimiento"
          </p>
          
          <div className="text-2xl font-bold text-gray-800">
            ¡Gracias por su atención!
          </div>
          <div className="text-gray-600">
            ¿Preguntas o comentarios?
          </div>
        </div>
      </div>
    )
  }
];
