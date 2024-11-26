const AddTodo=()=>{
    return     <div class="container">
    <div class="row">
      <div class="col-sm">
      
       <input type="text" className="form-control" placeholder="Enter todo here" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <div class="col-sm">
        
       <input type="date" className="form-control" placeholder="Date" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <div class="col-sm">
    
       <button type="button" class="btn btn-primary">Primary</button>
      </div>
    </div>
  </div>
   
}

export default AddTodo;