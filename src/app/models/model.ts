export class Question {
    title: string;
    choices: Choice[];
}

export class Choice{
    title: string;
    imageUrl: string;
    summary: string;
}