export default function SearchBar({ text, setText, handleSubmit }) {
    return (
      <div className="max-w-xl mx-auto text-center">
        {/* Título sobre el campo de búsqueda */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-10">
          Busca a tu futura mascota
        </h2>
        
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for a dog / breed"
            className="py-2 px-4 rounded-full shadow w-full bg-[#D8B3FF] text-white placeholder-white"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </div>
    );
  }
  
  