import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {

    @ApiProperty({example: 'ADMIN', description: 'Role of user'})
    readonly value: string;
    @ApiProperty({example: 'Administator', description: 'Description of role'})
    readonly description: string;
}