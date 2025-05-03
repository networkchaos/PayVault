import { useParams } from 'react-router-dom';

const Preview = () => {
  const { workId } = useParams();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Preview Work #{workId}</h2>
      <p className="text-gray-600">[Preview of the submitted work will appear here]</p>
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md">Pay Now</button>
    </div>
  );
};
export default Preview;
