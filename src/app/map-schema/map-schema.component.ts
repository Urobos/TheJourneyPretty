import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpfulValuesService } from '../helpful-values.service';
import { MapPoint } from '../map-point';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map-schema',
  templateUrl: './map-schema.component.html',
  styleUrls: ['./map-schema.component.css']
})
export class MapSchemaComponent implements OnInit {

  mapSchema: MapPoint[] = [];
  aktualPosition: number = 11;
  direction: string = "S";
  matchId: number = 1;
  status: boolean = false;
  statusUp: boolean = false;
  statusLeft: boolean = false;
  statusRight: boolean = false;
  statusDown: boolean = false;
  noBatlle!: boolean;

  constructor(
    private mapService: MapService,
    private router: Router,
    private helpfulValues : HelpfulValuesService
  ) {}

  ngOnInit(): void {
    this.getMap();
    this.aktualPosition = this.helpfulValues.rememberNode;
    this.direction = this.helpfulValues.rememberDirections;
    this.drawMap();
    this.helpfulValues.currentValue.subscribe(nu => this.noBatlle = nu);
  }

  getMap(): void {
    this.mapService.getMapPoints().
      subscribe(mapSchema => this.mapSchema = mapSchema);
  }

  getDirections(id: number): string {
    return this.mapSchema[id].directions;
  }

  drawMap(): void {
    if(this.direction.includes("N")) {
      this.statusUp = true;
    }
    if(this.direction.includes("E")) {
      this.statusRight = true;
    }
    if(this.direction.includes("W")) {
      this.statusLeft = true;
    }
    if(this.direction.includes("S")) {
      this.statusDown = true;
    }
  }

  clearMap(): void {
    this.statusUp = this.statusDown = this.statusLeft = this.statusRight = false;
  }

  goUp(): void {
    this.aktualPosition -= 1;
  }

  goDown(): void {
    this.aktualPosition += 1;
  }

  goLeft(): void {
    this.aktualPosition -= 10;
  }

  goRight(): void {
    this.aktualPosition += 10;
  }

  test(): void {
    this.status = !this.status;
    alert(this.status);
  }

  searchId(node : number): number {
    return this.mapSchema.findIndex(ele => ele.node == node);
  }

  moveUp(): void {
    if((Math.floor(Math.random()*4 + 1) > 3)) {
      this.helpfulValues.changeValue()
      this.redirectToFight()
    }
    else
    {
      this.goUp();
      if(this.aktualPosition == 19) alert("Wygrana!!!");
      this.matchId = this.searchId(this.aktualPosition);
      this.direction = this.getDirections(this.matchId);
      this.clearMap();
      this.drawMap();
      this.helpfulValues.rememberNode = this.aktualPosition;
      this.helpfulValues.rememberDirections = this.direction;
    }
  }

  moveLeft(): void {
    if((Math.floor(Math.random()*4 + 1) > 3)) {
      this.helpfulValues.changeValue()
      this.redirectToFight()
    }
    else
    {
      this.goLeft();
      if(this.aktualPosition == 19) alert("Wygrana!!!");
      this.matchId = this.searchId(this.aktualPosition);
      this.direction = this.getDirections(this.matchId);
      this.clearMap();
      this.drawMap();
      this.helpfulValues.rememberNode = this.aktualPosition;
      this.helpfulValues.rememberDirections = this.direction;
    }
  }

  moveRight(): void {
    if((Math.floor(Math.random()*4 + 1) > 3)) {
      this.helpfulValues.changeValue()
      this.redirectToFight()
    }
    else
    {
      this.goRight();
      if(this.aktualPosition == 19) alert("Wygrana!!!");
      this.matchId = this.searchId(this.aktualPosition);
      this.direction = this.getDirections(this.matchId);
      this.clearMap();
      this.drawMap();
      this.helpfulValues.rememberNode = this.aktualPosition;
      this.helpfulValues.rememberDirections = this.direction;
    }
  }

  moveDown(): void {
    if((Math.floor(Math.random()*4 + 1) > 3)) {
      this.helpfulValues.changeValue()
      this.redirectToFight()
    }
    else
    {
      this.goDown();
      if(this.aktualPosition == 19) alert("Wygrana!!!");
      this.matchId = this.searchId(this.aktualPosition);
      this.direction = this.getDirections(this.matchId);
      this.clearMap();
      this.drawMap();
      this.helpfulValues.rememberNode = this.aktualPosition;
      this.helpfulValues.rememberDirections = this.direction;
    }
  }

  redirectToFight(): void {
    this.router.navigateByUrl("/CorruptedGuardian")
  }

}
