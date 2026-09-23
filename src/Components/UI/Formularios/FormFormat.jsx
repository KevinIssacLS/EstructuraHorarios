export default function FormFormat({
  Title = "",
  children,
  Width = "min-w-xl",
  image,
}) {
  return (
    <div className="w-full flex justify-center py-20 space-y-4">
      <div className={`${Width} shadow-xl rounded-xl py-10 px-10`}>
        {/* <div className="w-full h-20 flex justify-center mb-6">
          <img src={image} alt="" className="h-full w-auto object-contain" />
        </div> */}

        {image==""?
        <div className="w-full h-30 overflow-hidden rounded-lg mb-6">
          <img src={image} alt="" className="w-full h-full object-cover object-center"/>
        </div>
        :""}
        <h2 className="text-center font-bold uppercase text-xl text-gray-800 pb-5">
          {Title}
        </h2>
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
}
