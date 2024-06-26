import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailUnico } from '../validacao/email-unico.validator';

export class AtualizaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  @IsOptional()
  nome: string;
  @IsEmail(undefined, { message: 'O email informado é inválido.' })
  @IsOptional()
  @EmailUnico({ message: 'Já existe um usuário com este email.' })
  email: string;
  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres.' })
  @IsOptional()
  senha: string;
}
