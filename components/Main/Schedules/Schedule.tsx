

function Schedule() {
  return (
    <section>
        <article className="flex">
        <span>
            <p>Horas lectivas</p>
            <p>Horas complementarias</p>
        </span>
        </article>
        <button>
            + Añadir Assgnatura
        </button>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Curso</th>
                <th>Grupo</th>
                <th>Horas Semana</th>
                <th>Espacio Regular</th>
                <th>Acciones</th>
            </tr>
            <tr>
                <td>Matemáticas</td>
                <td>Obligatoria</td>
                <td>1º Bachillerato</td>
                <td> B</td>
                <td>5h</td>
                <td> 1º Bach- Grupo B</td>
                <td className="flex"> 
                    <button>Ver</button>
                    <button>Editar</button>
                    <button>Eliminar</button>
                </td>
            </tr>
        </table>
    </section>
  )
}

export default Schedule