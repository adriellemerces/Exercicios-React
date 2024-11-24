function Imagem() {
    const linkan = [
        { urli: "https://sujeitoprogramador.com/wp-content/uploads/2019/04/react.png",},
        { urli: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5iEnT-UAqtRWim0Xq0jVg_bJBYtPUDNfp-V0wQ8pdnutAV4lJuWwKTvNTSi5nYBDlSs&usqp=CAU" ,},
    ]
    return (
        <>
        {linkan.map((link) => (
            <img src={link.urli} alt="" />
    ))}
    </>
    )
}
export default Imagem