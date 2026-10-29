import Headder from "../components/header";
import Footer from "../components/footer";


export default function Mypage () {
    
    return (
      <>
      <Headder></Headder>
        <div>
        
        
        
        <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center" style={{ backgroundImage: `url('xxx')` }}>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="relative z-10 p-4 text-white">
    <h1 className="text-5xl font-extrabold mb-4">นายจักรภัทร คำสม</h1>
    <p className="text-lg mb-8">026830491012-1</p>
    <p className="text-lg mb-8">jakkapat.kum@rmutto.ac.th</p>
    <a href="./MyPetForm" className="bg-indigo-600 px-6 py-3 rounded-lg">ไป MyPetForm</a>
  </div>
</section>
</div>
  <div>
  <Footer></Footer>
  </div>
</>
    );
}