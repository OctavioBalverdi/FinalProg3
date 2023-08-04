import { Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import Listado from './component/list/list'
import Cabecera from './component/header/header'
import Leftmenu from './component/menu/menu'
import Futer from './component/footer/footer'
import Home from './component/home/home'
import Registro from './component/registrar/registrar'
import Ropa from './component/Pages/Ropa'
import Zapatillas from './component/Pages/Zapatillas'

const { Sider, Content } = Layout

const App = () => 
  
    <div className="App">
     <Layout>
        <Sider>
          <Leftmenu />
        </Sider>
        <Layout>
            <Cabecera/>
          <Content>
            <Routes>
              <Route path='/Home' element={<Home/>}/>
              <Route path='/Ropa' element={<Ropa/>}/>
              <Route path='/Zapatillas' element={<Zapatillas/>}/>
              <Route path='/ventas' element={<Listado/>} />
              <Route path='/registro' element={<Registro/>}/>
              <Route path='/' element={<Home/>}/>
            </Routes>
          </Content>
            <Futer contenido="" />
        </Layout>
      </Layout>
    </div>
    
export default App