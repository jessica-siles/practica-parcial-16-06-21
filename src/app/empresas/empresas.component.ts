import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empresa } from '../../models/empresas';
import { EmpresasService } from './servicios/empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  Items: Empresa[] = null;
  constructor(
    public formBuilder: FormBuilder,
    private empresasService: EmpresasService
  ) {}

  ngOnInit() {}

  Buscar() {
    this.empresasService.get().subscribe((res: any) => {
      this.Items = res;
    });
  }
}
