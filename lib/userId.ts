import { getAuthOptions } from "./auth";

export const getUserId = async () => {
    const session = await getAuthOptions();
    const userId = session?.user?.id;

    return userId;
};