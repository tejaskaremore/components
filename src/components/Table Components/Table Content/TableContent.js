
const TableContent =(props)=>{


    return(  <tr>
        <td>{props.company.toUpperCase()}</td>
        <td>{props.contact}</td>
        <td>{props.country}</td>
      </tr>)

}
export default TableContent;