export const cardcomponent = (product) => {
    return (
        `
       <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-[250px]">
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-[200px]">
          <img
            src =${product?.image || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fralfvanveen.com%2Fen%2Fglossary%2Fplaceholder%2F&psig=AOvVaw2QfKOxkwLqPZXDeaKR_hDp&ust=1716994668040000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMimjuXNsIYDFQAAAAAdAAAAABAE"}
            alt="card-image" class="object-cover w-full h-full" />
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-2">
            <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              ${product?.title || "Untitled product"}
            </p>
            <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
             $${product?.price || "Unknow"}
            </p>
          </div>
           </div>
        <div class="p-6 pt-0">
          <button
            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            type="button">
            Add to Cart
          </button>
        </div>
      </div>
      `
    );
};
