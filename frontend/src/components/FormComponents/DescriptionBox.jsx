export default function DescriptionBox({onChange}) {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="description" className="text-2xl font-semibold font-ubuntu">Description</label>
      <textarea
        name="description"
        id="description"
        rows={4}
        onChange={onChange}
        className="border-black border-4 bg-blue-200 rounded-xl px-2 py-4 text-xl font-gummy"
      ></textarea>
    </div>
  );
}
