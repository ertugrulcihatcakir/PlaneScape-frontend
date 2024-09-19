const OtherJobCard = ({ icon, label, img, color }) => {
  console.log('color filter not finished!');
  return (
    <div className=" w-full h-[300px] rounded-2xl ">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={` rounded-2xl bg-cover h-full w-full flex flex-col items-start justify-end gap-2 text-white relative z-0`}
      > 

      {/* color filter not finished! */}
        <div
        style={{ backgroundColor: `${color} ` }}
          className={`rounded-2xl  opacity-50   absolute inset-0 z-10`}
        ></div>
        <div className="mx-6 mt-5 relative z-20">{icon}</div>
        <div className="label text-2xl font-bold mx-6 mb-5 relative z-20">
          {label}
        </div>
      </div>
    </div>
  );
};

export default OtherJobCard;
