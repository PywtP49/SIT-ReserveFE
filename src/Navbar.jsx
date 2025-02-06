import "react";

const Navbar = () => {
  return (
    <div className="top-0 w-[60%] max-w-5xl bg-blue-900 shadow-2xl rounded-b-[50px] px-7 py-4 flex justify-center items-center mx-auto">
  <div className="relative flex justify-center items-center gap-60 text-center text-black text-xl font-normal tracking-tight">
    <a href="Calendar" className="text-white">Calendar</a>
    <a href="Book multiple rooms" className="text-white">Book multiple rooms</a>
    <a href="room" className="text-white">Room</a>
  </div>
</div>
  );
};

export default Navbar;



// import "react";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
// <div className="top-0 w-[60%] max-w-5xl bg-white shadow-2xl rounded-b-[50px] px-7 py-4 flex justify-center items-center Nav">
//           <div className="relative flex justify-center items-center gap-40 text-center text-black text-xl font-normal trackfont-sans-serif ing-tight">
//             <a href="">Book multiple rooms</a>
//             <a href="">Room</a>
//           </div>
//         </div>
//   );
// };

// export default Navbar;
