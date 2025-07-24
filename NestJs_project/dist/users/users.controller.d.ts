export declare class UsersController {
    getAllUsers(): string;
    getUser(id: string): string;
    createUser(body: any): {
        message: string;
        data: any;
    };
}
