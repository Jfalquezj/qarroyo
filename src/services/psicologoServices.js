import { post, get } from "./http"

const getallpsicologos = async () => {
    const psicologos = await get("psicologo");
    return psicologos.psicologo;
}

export {getallpsicologos}
