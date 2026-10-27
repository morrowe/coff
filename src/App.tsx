import './App.css'
import cap1 from './assets/cap1.png'
import cap2 from './assets/cap2.png'
import cap3 from './assets/cap3.png'
import cap4 from './assets/cap4.png'
import coff from './assets/coff.png'
import splas from './assets/splas.png'
import splas2 from './assets/splas2.png'
import logo from './assets/logo.png'

function App() {

  return (
    <>
      <main className='font-playfair'>
        <section className='h-[90vh] w-full bg-[url(src/assets/bg.png)] bg-no-repeat bg-cover bg-center'></section>
        <section className='h-[600px] w-full flex justify-center items-center'>
          <div className='h-[400px] w-[700px] flex flex-col justify-evenly'>
            <h2 className='text-[#603809] text-[54px] font-bold'>Discover the best coffee</h2>
            <p className='w-[85%] text-[20px]'>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
            <button className='w-[134px] h-[4.8vh] bg-[#F9C06A] text-[#1E1E1E] text-base rounded-3xl font-bold hover:bg-[#DDA046]'>Learn More</button>
          </div>
          <img src={coff} className='w-[30%] h-auto' alt="" />
        </section>
        <div className='w-full flex relative'>
          <img className='w-[25%] absolute top-[-130px]' src={splas} alt="" />
        </div>
        <section className="h-[650px] w-full flex flex-col items-center justify-evenly bg-[#FFFEFC]">
          <h1 className="text-[54px] text-[#603809] font-bold">Enjoy a new blend of coffee style</h1>
          <p className='text-[#707070] text-xl'>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
          <div className='w-[1200px] h-[380px] flex flex-wrap justify-between'>
            <div className='bg-[#FFF9F1] h-[364px] w-[280px] flex flex-col items-center border border-[#F9C06A6B]'>
              <img className='w-[100%]' src={cap1} alt="" />
              <div className='h-[86px] mt-3'>
                <h2 className='text-center text-[#603809] text-[22px] font-bold'>Cappuccino</h2>
                <p className='text-center text-[16px]'>Coffee 50% | Milk 50%</p>
                <p className='text-center text-[18px] text-[#603809] font-bold'>$8.50</p>
              </div>
              <button className='w-[134px] h-[4.8vh] bg-[#F9C06A] text-[#1E1E1E] text-base rounded-3xl relative top-[20px] font-bold hover:bg-[#DDA046]'>Order Now</button>
            </div>
            <div className='bg-[#FFF9F1] h-[364px] w-[280px] flex flex-col items-center border border-[#F9C06A6B]'>
              <img className='w-[100%]' src={cap2} alt="" />
              <div className='h-[86px] mt-3'>
                <h2 className='text-center text-[#603809] text-[22px] font-bold'>Chai Latte</h2>
                <p  className='text-center text-[16px]'>Coffee 50% | Milk 50%</p>
                <p className='text-center text-[18px] text-[#603809] font-bold'>$8.50</p>
              </div>
              <button className='w-[134px] h-[4.8vh] bg-[#F9C06A] text-[#1E1E1E] text-base rounded-3xl relative top-[20px] font-bold hover:bg-[#DDA046]'>Order Now</button>
            </div>
            <div className='bg-[#FFF9F1] h-[364px] w-[280px] flex flex-col items-center border border-[#F9C06A6B]'>
              <img className='w-[100%]' src={cap3} alt="" />
              <div className='h-[86px] mt-3'>
                <h2 className='text-center text-[#603809] text-[22px] font-bold'>Macchiato</h2>
                <p className='text-center text-[16px]'>Coffee 50% | Milk 50%</p>
                <p className='text-center text-[18px] text-[#603809] font-bold'>$8.50</p>
              </div>
              <button className='w-[134px] h-[4.8vh] bg-[#F9C06A] text-[#1E1E1E] text-base rounded-3xl relative top-[20px] font-bold hover:bg-[#DDA046]'>Order Now</button>
            </div>
            <div className='bg-[#FFF9F1] h-[364px] w-[280px] flex flex-col items-center border border-[#F9C06A6B]'>
              <img className='w-[100%] h-[220px]' src={cap4} alt="" />
              <div className='h-[86px] mt-3'>
                <h2 className='text-center text-[#603809] text-[22px] font-bold'>Expresso</h2>
                <p className='text-center text-[16px]'>Coffee 50% | Milk 50%</p>
                <p className='text-center text-[18px] text-[#603809] font-bold'>$8.50</p>
              </div>
              <button className='z-2 w-[134px] h-[4.8vh] bg-[#F9C06A] text-[#1E1E1E] text-base rounded-3xl relative top-[20px] font-bold hover:bg-[#DDA046]'>Order Now</button>
            </div>
          </div>
        </section>
        <div className='w-full flex relative justify-end'>
          <img className='w-[25%] absolute top-[0px]' src={splas2} alt="" />
        </div>
        <section className='h-[750px] relative w-full flex flex-col items-center justify-evenly'>
          <h2 className="text-[54px] text-[#603809] font-bold">Why are we different?</h2>
          <p className='text-[#707070] text-xl'>We don’t just make your coffee, we make your day!</p>
          <div className='w-[1200px] flex flex-row flex-wrap justify-between'>
            <div className='bg-[#FFF9F1] h-[284px] w-[280px] flex flex-col items-center justify-center border border-[#F9C06A6B] hover:bg-[#F9C06A6B]'>
              <img className='' src="src/assets/coffeebeans.png" alt="" />
              <h2 className='h-[60px] flex items-center text-[#603809] text-[22px] font-bold'>Supreme Beans</h2>
              <p className='w-[70%] text-center text-[#707070] text-[16px]'>Beans that provides great taste</p>
            </div>
            <div className='bg-[#FFF9F1] h-[284px] w-[280px] flex flex-col items-center justify-center border border-[#F9C06A6B] hover:bg-[#F9C06A6B]'>
              <img className='' src="src/assets/badge.png" alt="" />
              <h2 className='h-[60px] flex items-center text-[#603809] text-[22px] font-bold'>High Quality</h2>
              <p className='w-[70%] text-center text-[#707070] text-[16px]'>We provide the highest quality</p>
            </div>
            <div className='bg-[#FFF9F1] h-[284px] w-[280px] flex flex-col items-center justify-center border border-[#F9C06A6B] hover:bg-[#F9C06A6B]'>
              <img className='' src="src/assets/coffeecup.png" alt="" />
              <h2 className='h-[60px] flex items-center text-[#603809] text-[22px] font-bold'>Extraordinary </h2>
              <p className='w-[70%] text-center text-[#707070] text-[16px]'>Coffee like you have never tasted</p>
            </div>
            <div className='bg-[#FFF9F1] h-[284px] w-[280px] flex flex-col items-center justify-center border border-[#F9C06A6B] hover:bg-[#F9C06A6B]'>
              <img src="src/assets/bestprice.png" alt="" />
              <h2 className='h-[60px] flex items-center text-[#603809] text-[22px] font-bold'>Affordable Price</h2>
              <p className='w-[70%] text-center text-[#707070] text-[16px]'>Our Coffee prices are easy to afford</p>
            </div>
          </div>
          <div className='w-full flex flex-col items-center'>
            <p>Great ideas start with great coffee, Lets help you achieve that</p>
            <p className="text-[30px] text-[#603809] font-bold">Get started today.</p>
            <button className='w-[134px] h-[4.8vh] bg-[#F9C06A] text-[#1E1E1E] text-base rounded-3xl relative top-[20px] font-bold hover:bg-[#DDA046]'>Join Us</button>
          </div>
        </section>
        <section className='h-[574px] w-full bg-[url(src/assets/bg2.png)] bg-no-repeat bg-size-[100%] bg-center flex justify-center'>
          <div className='w-[1200px] h-full flex justify-between items-center'>
            <div className='w-[60%] h-[60%]'>
              <h2 className='text-[#fff] text-[54px] font-bold'>Get a chance to have an Amazing morning</h2>
              <p className='text-[#fff] text-[20px] '>We are giving you are one time opportunity to experience a better life with coffee.</p>
              <button className='w-[134px] h-[4.8vh] bg-[#F9C06A] text-[#1E1E1E] text-base rounded-3xl relative top-[20px] font-bold hover:bg-[#DDA046]'>Order Now</button>
            </div>
            <img className='absolute right-[0px]' src="src/assets/Group 330.png" alt="" />
          </div>
        </section >
        <section className='h-[840px] w-full flex flex-col items-center justify-center relative'>
          <h2 className="text-[54px] text-[#603809] font-bold">Our coffee perfection feedback</h2>
          <p className='h-[60px] text-[#707070] text-xl'>Our customers has amazing things to say about us</p>
          <img className='w-[30%] absolute right-[0] top-[-40px] z-1' src="src/assets/splas2.png" alt="" />
          <div className='h-[524px] w-[980px] bg-[#FFF9F1] border border-[#F9C06A6B] flex flex-col items-center justify-evenly'>
            <img className='relative right-[400px]' src="src/assets/“.png" alt="" />
            <p className='h-[170px] text-center w-[70%] text-[#707070] flex items-end'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....</p>
            <h3 className='text-[#603809] text-[32px] font-bold'>Jonny Thomas</h3>
            <p>Project Manager</p>
            <img className='relative top-[80px]' src="src/assets/Rec.png" alt="" />
          </div>
          <img className='w-[30%] absolute left-[0] top-[410px] z-1' src="src/assets/splas.png" alt="" />
        </section>
        <section className='h-[374px] w-full bg-[url(src/assets/bg2.png)] bg-no-repeat bg-size-[100%] bg-center flex justify-center'>
          <img src="" alt="" />
          <div className='flex flex-col justify-evenly'>
            <h2 className='text-[#fff] text-[54px] font-bold'>Subscribe to get the Latest News</h2>
            <p className='text-[#fff] text-[20px] text-center'>Don’t miss out on our latest news, updates, tips and special offers</p>
            <div className='flex justify-center '>
              <input className='bg-[#FFF9F1] w-[500px] h-[6.6vh] rounded-[0.2rem]' type="text" name="" id="" />
              <button className='w-[134px] h-[6.6vh] bg-[#F9C06A] text-[#1E1E1E] text-base rounded-[0.2rem] font-bold hover:bg-[#DDA046]'>Suscribe</button>
            </div>
          </div>
          <img src="" alt="" />
        </section>
      </main>
      {/* <footer>
        <div>
          <div>
            <img src={logo} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div>
              <a href=""><img src="" alt="" /></a>
              <a href=""><img src="" alt="" /></a>
              <a href=""><img src="" alt="" /></a>
              <a href=""><img src="" alt="" /></a>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  )
}

export default App
