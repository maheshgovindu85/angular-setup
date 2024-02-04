import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-material-selector',
  templateUrl: './material-selector.component.html',
  styleUrls: ['./material-selector.component.css']
})
export class MaterialSelectorComponent {
  materialForm: FormGroup;

  // List of selected material IDs
  selectedMaterials: number[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.materialForm = this.formBuilder.group({
      materials: this.formBuilder.array([])
    });
  }

  get materials(): FormArray {
    return this.materialForm.get('materials') as FormArray;
  }

  // Function to handle material selection
  onMaterialSelect(materialId: number, index: number) {
    // Check if the material has been previously selected
    const isPreviouslySelected = this.selectedMaterials.includes(materialId);

    if (!isPreviouslySelected) {
      this.selectedMaterials.push(materialId);
    }

    // Show/hide card based on selection
    this.materials.controls.forEach((control, idx) => {
      if (idx === index) {
        control.get('showCard')!.setValue(!isPreviouslySelected);
      } else if (control.get('materialId')!.value === materialId) {
        control.get('showCard')!.setValue(false);
      }
    });
  }

  // Function to add a new material row
  addMaterialRow() {
    const materialRow = this.formBuilder.group({
      materialId: [''], // Add validators if needed
      showCard: [true] // Initial value for showCard
    });
    this.materials.push(materialRow);
  }

  // Function to remove a material row
  removeMaterialRow(index: number) {
    this.materials.removeAt(index);
  }
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.component.html',
  styleUrls: ['./your-component.component.css']
})
export class YourComponent {
  selectedMaterials: number[] = []; // Array to keep track of selected material IDs
  showCard: boolean[] = []; // Array to determine whether to show the card for each material

  constructor() { }

  onSelectMaterial(materialId: number) {
    if (this.selectedMaterials.includes(materialId)) {
      // Material already selected, set showCard to false
      this.showCard[materialId] = false;
    } else {
      // Material not selected yet, set showCard to true and add to selectedMaterials
      this.showCard[materialId] = true;
      this.selectedMaterials.push(materialId);
    }
  }
}
