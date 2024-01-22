import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function WorkingHoursTable() {
    return(
        <MDBTable hover>
      <MDBTableHead>
        <tr>
          <th scope='col' className='fw-bold'>Day</th>
          <th scope='col' className='fw-bold'>Opening</th>
          <th scope='col' className='fw-bold'>Closing</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>Mon to Fri:</th>
          <td>08:00</td>
          <td>21:00</td>
        </tr>
        <tr>
          <th scope='row'>Sat:</th>
          <td>10:00</td>
          <td>18:00</td>

        </tr>
        <tr>
          <th scope='row'>Sun:</th>
          <td>12:00</td>
          <td>18:00</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    )
}


export default WorkingHoursTable;