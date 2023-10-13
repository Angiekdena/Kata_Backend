import Layout from '../componentes/Layout'
import ButtonNav from '../componentes/ButtonNav'


function Home() {
    return (
      <Layout>
        <div className="d-flex flex-column align-items-center ">
        <h1 className='mb-2 p-lg-2 text-center fs-1 fw-bold' width="842" height="250">Tus notas, proyectos, documentos. En un solo lugar</h1>
        <ButtonNav texto= "Inicia aqui" ruta="/SingIn" styles="btn btn-dark me-3 fs-3 fw-bold btn-lg"/>
        <img className='p-4' src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080,quality=80/front-static/pages/home/home-hero.png" alt="notas" />
        <h3>La organización de las tareas es esencial para ser productivo y evitar la sensación de estar abrumado. </h3>
        <div>
          <ol className='fs-5'>
            <li><strong>Lista de Tareas: </strong>Empieza por anotar todo lo que necesitas hacer. No te preocupes por el orden; simplemente anota todo lo que venga a tu mente.</li>
            <li><strong>Priorización: </strong>Una vez que hayas anotado todo, es hora de priorizar. Decide qué tareas son más urgentes y cuáles pueden esperar. Una técnica útil es la matriz de Eisenhower, que divide las tareas en urgente/importante, no urgente/importante, urgente/no importante y no urgente/no importante.</li>
            <li><strong>Desglosa Tareas Grandes: </strong>Las tareas más grandes pueden ser abrumadoras. Desglosa estas tareas en pasos más pequeños y manejables.</li>
            <li><strong>Revisa Regularmente: </strong>Establece un tiempo cada día o semana para revisar y actualizar tu lista. Esto te permite adaptarte a cambios inesperados y garantiza que nada se pase por alto.</li>
            <li><strong>Limita las Distracciones: </strong>Identifica lo que suele distraerte y busca formas de minimizar esas distracciones cuando estés trabajando en tus tareas.</li>
          </ol>
        </div>
        </div>
      </Layout>
    )
  }
  
  export default Home