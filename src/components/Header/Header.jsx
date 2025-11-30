// import './Header.css'

// const Header = () => {
//   return (
//     <section className="h-wrapper">
//       <div className="flexCenter paddings innerWidth h-container">
//         <img src="/logo.png" alt="logo" width={100} />

//         <div className="flexCenter h-menu">
//           <a href="">Study Abroad</a>
//           <a href="">Career Launchpad</a>
//           <a href="">Professional Courses</a>
//           <a href="">Healthcare Jobs Abroad</a>
//           <button className="button">
//             <a href="">Contact US!</a>
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Header

import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={125} />

        <div className="flexCenter h-menu">
          <a href="">Study Abroad</a>
          <a href="">Career Launchpad</a>
          <a href="">Professional Courses</a>
          <a href="">Healthcare Jobs Abroad</a>
          <button className="button">
            <a href="">Contact US</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Header
