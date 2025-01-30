export default function FileBox({onChange}) {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-2xl font-semibold font-ubuntu">Upload file</label>
      <div>
        <input
          type="file"
          name="image"
          onChange={onChange}
          className="w-full font-gummy text-xl font-semibold bg-blue-200 border-4 border-black file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-black rounded-xl"
        />
        <p className="text-sm text-black font-semibold mt-2">
          PNG, JPG, JPEG are Allowed.
        </p>
      </div>
    </div>
  );
}
