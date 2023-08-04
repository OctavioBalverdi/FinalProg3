import { Layout} from 'antd';


const { Header } = Layout;

  const Cabecera=()=>{
   return( <div className='cabecera'>
    <Header style={{ padding:'18x',justifycontent:'center',alignitems:'center', color:'black', minWidth:'100%',backgroundColor: 'whitesmoke',gap:'8px',alignself:'stretch'}}> 
    <nav>
    <ul style={{display:'flex', width: '1100px', margin:'0', justifyContent: 'space-between', alignitems: 'center'}}>
      <il style={{display:'flex', alignitems:'center', gap:'16px', margin:'0px 0px 10px 10px'}}><h2>Tienda Multimarca</h2></il>
      <il><input style = {{ position:'relative', top:'25%',left:'25%', transform:'translate(-50%,-50%)', padding:'5px 7px 5px 15px', autoComplete:'none', fontSize:'18px', borderRadius:'15px', color:'#444', border:'3px solid black', background:'#fff no-repeat 9px center', transition:'.5seg'}} type="text" name='search' placeholder='Buscar' class='src' autoComplete='off' 
       /></il>
    </ul>  
    </nav>

    </Header>
   </div>)
  }
  export default Cabecera



