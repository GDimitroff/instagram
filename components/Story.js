import Image from 'next/image';

const Story = ({ username, img }) => {
  return (
    <div>
      <Image
        src={img}
        alt="Profile picture"
        width={56}
        height={56}
        className="rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
};

export default Story;
