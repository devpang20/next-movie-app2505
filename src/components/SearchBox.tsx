export default function SearchBox({ keyword, onChangeKeyword }) {
  return (
    <div className="w-full mt-2">
      <div className="relative flex items-center gap-2 bg-white rounded-full overflow-hidden shadow-md max-w-[60%] mx-auto">
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex items-center">
          🔍
        </div>
        <input
          className="w-full block py-2 px-5 pl-10 border-0 outline-none"
          placeholder="영화 이름을 입력하세요."
          value={keyword}
          onChange={onChangeKeyword}
        />
      </div>
    </div>
  );
}
