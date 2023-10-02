import { ICard } from "@/models/ICard";

const randomizeCards = (data: ICard[]) => {
    const res = data.sort(() => Math.random() - 0.5);
    return res;
};

export default randomizeCards;
