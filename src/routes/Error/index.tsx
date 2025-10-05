import { useEffect } from "react"

function Error(){
    useEffect(() => {
        document.title = 'Erro 404'
    },[])

    return(
        <main>
            <section>
              <h1 className="text-fiap-cor text-6xl">404</h1>
              <p>A página que você tentou acessar não pode ser encontrada.</p>
          </section>
        </main>
    )
}

export default Error