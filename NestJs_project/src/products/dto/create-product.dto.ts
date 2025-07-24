import { IsString, IsNumber, MinLength, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateProductDto {
  @Transform(({value})=>{
    if(value==='ramesh') return 'rakesh';
    return value;
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string; 

  @IsNumber()
  age: number;
}
