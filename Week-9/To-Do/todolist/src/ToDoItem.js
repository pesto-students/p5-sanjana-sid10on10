import Button from '@mui/material/Button'


function ToDoItem(props){
    const { data, list, setList } = props

    function deleteItem(data){
        let id = data.id
        for(let i=0;i<list.length;i++){
            if(list[i].id===id){
                list[i].deleted = true
            }
        }
        setList([...list])
    }

    function markItem(data){
        let id = data.id
        for(let i=0;i<list.length;i++){
            if(list[i].id===id){
                list[i].status = 'Done'
            }
        }
        setList([...list])
    }

    return <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
        <div style={{ marginRight: '20px' }}>{data.id} - </div>
        <div>{props.data.title}</div>
        <div>
            {data.status === 'Pending' ? (
            <Button variant="contained" onClick={()=>{
                markItem(data)
            }} sx={{ marginLeft: '20px' }}>
                Mark Complete
            </Button>) : <Button variant="contained" sx={{ marginLeft: '20px' }}>
                Completed
            </Button>}
        </div>
        <div>
            <Button variant="contained" onClick={(event)=>{
                deleteItem(data)
            }} sx={{ marginLeft: '20px' }}>
                Delete
            </Button>
        </div>
    </div>
}

export default ToDoItem;