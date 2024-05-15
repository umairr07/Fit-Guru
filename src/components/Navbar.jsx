const Navbar = () => {
  return (
    <div className="flex justify-around items-center bg-[#F7EDEB] text-[#3B3D41] p-5">
      <div>
        <h1 className="text-3xl font-bold">FIT FAST</h1>
      </div>

      <div className="flex gap-10 cursor-pointer">
        <p>HOME</p>
        <p>EXERCIESES</p>
      </div>
    </div>
  );
};

export default Navbar;
