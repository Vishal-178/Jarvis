export default function SubContent ({head="",text}:any) {
  return (
    <p className="text-[#757575] mt-2 text-base">
      <span className="text-lg font-semibold mt-2 text-[#757575]">{head}</span>
      {text}
    </p>
  )

}