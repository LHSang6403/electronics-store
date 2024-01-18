import create from "./_actions/upload";

const TestUploadImg = () => {
  return (
    <form action={create} className="mx-auto">
      <label htmlFor="image" className="block font-semibold text-sm mb-2">
        Select an Image to Upload
      </label>
      <input
        id="image"
        className="block w-full border-slate-400 rounded-xl focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        type="file"
        name="image"
        required
      />
      <button type="submit" className="bg-primary px-2 py-1 mt-2 rounded-xl">
        Submit
      </button>
    </form>
  );
};

export default TestUploadImg;
