import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createLibroDto: CreateLibroDto){
    return this.librosService.create(createLibroDto)
  }

  // @Post()
  // create(@Body() createLibroDto: CreateLibroDto) {
  //   return this.librosService.create(createLibroDto);
  // }

  @Get('listar')
  findAll() {
    return this.librosService.findAll();
  }
  

  @Get(':id')
  findOne(@Param('id') isbn: string) {
    return this.librosService.findOne(isbn);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLibroDto: UpdateLibroDto) {
    return this.librosService.update(+id, updateLibroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.librosService.remove(+id);
  }
}
