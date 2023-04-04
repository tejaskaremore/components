import TableContent from "./TableContent";

const TableData = (props) => {

  const { TableArry } = props;
  console.log('TableArry', TableArry);

  const newTableArry = TableArry.map((obje) =>(
    <TableContent
      company={obje.company}
      contact={obje.contact}
      country={obje.country}
    />
  ))

  return (
    // <tr>
    //     <td> New Alfreds Futterkiste</td>
    //     <td>Maria Anders</td>
    //     <td>Germany</td>
    //   </tr>
    <tbody>

      {newTableArry}


    </tbody>
  )
};
export default TableData;