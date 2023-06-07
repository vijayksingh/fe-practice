import Table from './Tables'
import { columns, tableData } from './data'

const TableDemo = () => {
  return (
    <Table columns={columns} rows={tableData} />
  )
}

export default TableDemo