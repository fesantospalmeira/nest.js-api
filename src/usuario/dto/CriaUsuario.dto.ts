import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailUnico } from '../validacao/email-unico.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  nome: string;
  @IsEmail(undefined, { message: 'O email informado é inválido.' })
  @IsNotEmpty({ message: 'O email não pode ser vazio.' })
  @EmailUnico({ message: 'Já existe um usuário com este email.' })
  email: string;
  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres.' })
  @IsNotEmpty({ message: 'A senha não pode ser vazia.' })
  senha: string;
}
