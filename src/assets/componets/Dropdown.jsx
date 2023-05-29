function Dropdown(props){
    return(
    <div className="dropdown">
  <ul className="dropdown-menu">
    <li><a class="dropdown-item" href="#">{props.name}</a></li>
    <li><a class="dropdown-item" href="#">{props.name}</a></li>
    <li><a class="dropdown-item" href="#">{props.name}</a></li>
  </ul>
  <img src="props.img" alt="" srcset="" />
</div>)
}
export default Dropdown