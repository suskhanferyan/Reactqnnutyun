function Text({showText}){
    const text = "lorem impsum dolor Eso Artur Ero jan ,Tot Sami"
    return <div>{showText ? text : text.slice(0,19)}</div>
    }
export default Text;