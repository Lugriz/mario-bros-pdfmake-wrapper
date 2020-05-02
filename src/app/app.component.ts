import { Component } from '@angular/core';
import { PdfMakeWrapper, Canvas, Rect } from 'pdfmake-wrapper';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="generatePdf()">
        Generate PDF
    </button>
  `
})
export class AppComponent {

    private red: string = '#f80303';
    private blue: string = '#001fd9';
    private black: string = '#000000';
    private brown: string = '#5b2300';
    private skin: string = '#ffb971';
  
    public generatePdf(): void {
        const pdf = new PdfMakeWrapper();

        pdf.add(
            new Canvas([
                ...this.hat(),
                ...this.eye(),
                ...this.hair(),
                ...this.face(),
                ...this.shirt(),
                ...this.hands(),
                ...this.jeans(),
                ...this.shoes()
            ]).end
        );

        pdf.create().open();
    }

    private hat() {
        return [
            this.pixel(3, 0, this.red),
            this.pixel(4, 0, this.red),
            this.pixel(5, 0, this.red),
            this.pixel(6, 0, this.red),
            this.pixel(7, 0, this.red),
            this.pixel(2, 1, this.red),
            this.pixel(3, 1, this.red),
            this.pixel(4, 1, this.red),
            this.pixel(5, 1, this.red),
            this.pixel(6, 1, this.red),
            this.pixel(7, 1, this.red),            
            this.pixel(8, 1, this.red),            
            this.pixel(9, 1, this.red),            
            this.pixel(10, 1, this.red),            
        ];
    }

    private eye() {
        return [
            this.pixel(7, 2, this.black),
            this.pixel(7, 3, this.black),
        ];
    }

    private hair() {
        return [
            // back
            this.pixel(1, 3, this.brown),
            this.pixel(1, 4, this.brown),
            this.pixel(1, 5, this.brown),
            this.pixel(2, 5, this.brown),

            //up
            this.pixel(2, 2, this.brown),
            this.pixel(3, 2, this.brown),
            this.pixel(4, 2, this.brown),
            this.pixel(3, 3, this.brown),
            this.pixel(3, 4, this.brown),
            this.pixel(4, 4, this.brown),

            //mostache
            this.pixel(8, 4, this.brown),
            this.pixel(7, 5, this.brown),
            this.pixel(8, 5, this.brown),
            this.pixel(9, 5, this.brown),
            this.pixel(10, 5, this.brown),
        ];
    }

    private face() {
        return [
            // ear
            this.pixel(2, 3, this.skin),
            this.pixel(2, 4, this.skin),

            // nose
            this.pixel(8, 2, this.skin),
            this.pixel(8, 3, this.skin),
            this.pixel(9, 3, this.skin),
            this.pixel(10, 3, this.skin),
            this.pixel(9, 4, this.skin),
            this.pixel(10, 4, this.skin),
            this.pixel(11, 4, this.skin),

            // face
            this.pixel(5, 2, this.skin),
            this.pixel(6, 2, this.skin),
            this.pixel(4, 3, this.skin),
            this.pixel(5, 3, this.skin),
            this.pixel(6, 3, this.skin),
            this.pixel(5, 4, this.skin),
            this.pixel(6, 4, this.skin),
            this.pixel(7, 4, this.skin),

            this.pixel(3, 5, this.skin),
            this.pixel(4, 5, this.skin),
            this.pixel(5, 5, this.skin),
            this.pixel(6, 5, this.skin),

            this.pixel(3, 6, this.skin),
            this.pixel(4, 6, this.skin),
            this.pixel(5, 6, this.skin),
            this.pixel(6, 6, this.skin),
            this.pixel(7, 6, this.skin),
            this.pixel(8, 6, this.skin),
            this.pixel(9, 6, this.skin),
        ];
    }

    private shirt() {
        return [
            this.pixel(2, 7, this.red),
            this.pixel(3, 7, this.red),
            this.pixel(5, 7, this.red),
            this.pixel(6, 7, this.red),
            this.pixel(7, 7, this.red),
            
            this.pixel(1, 8, this.red),
            this.pixel(2, 8, this.red),
            this.pixel(3, 8, this.red),
            this.pixel(5, 8, this.red),
            this.pixel(6, 8, this.red),
            this.pixel(8, 8, this.red),
            this.pixel(9, 8, this.red),
            this.pixel(10, 8, this.red),

            this.pixel(0, 9, this.red),
            this.pixel(1, 9, this.red),
            this.pixel(2, 9, this.red),
            this.pixel(3, 9, this.red),
            this.pixel(8, 9, this.red),
            this.pixel(9, 9, this.red),
            this.pixel(10, 9, this.red),
            this.pixel(11, 9, this.red),

            this.pixel(2, 10, this.red),
            this.pixel(9, 10, this.red)
        ];
    }

    private hands() {
        return [
            this.pixel(0, 10, this.skin),
            this.pixel(1, 10, this.skin),

            this.pixel(4, 10, this.skin),
            this.pixel(7, 10, this.skin),

            this.pixel(10, 10, this.skin),
            this.pixel(11, 10, this.skin),
            this.pixel(9, 11, this.skin),
            this.pixel(10, 11, this.skin),
            this.pixel(11, 11, this.skin),
            this.pixel(10, 12, this.skin),
            this.pixel(11, 12, this.skin)
        ];
    }

    private jeans() {
        return [
            this.pixel(4, 7, this.blue),

            this.pixel(4, 8, this.blue),
            this.pixel(7, 8, this.blue),

            this.pixel(4, 9, this.blue),
            this.pixel(5, 9, this.blue),
            this.pixel(6, 9, this.blue),
            this.pixel(7, 9, this.blue),

            this.pixel(3, 10, this.blue),
            this.pixel(5, 10, this.blue),
            this.pixel(6, 10, this.blue),
            this.pixel(8, 10, this.blue),

            this.pixel(3, 11, this.blue),
            this.pixel(4, 11, this.blue),
            this.pixel(5, 11, this.blue),
            this.pixel(6, 11, this.blue),
            this.pixel(7, 11, this.blue),
            this.pixel(8, 11, this.blue),

            this.pixel(2, 12, this.blue),
            this.pixel(3, 12, this.blue),
            this.pixel(4, 12, this.blue),
            this.pixel(7, 12, this.blue),
            this.pixel(8, 12, this.blue),
            this.pixel(9, 12, this.blue),

            this.pixel(2, 13, this.blue),
            this.pixel(3, 13, this.blue),
            this.pixel(4, 13, this.blue),
            this.pixel(7, 13, this.blue),
            this.pixel(8, 13, this.blue),
            this.pixel(9, 13, this.blue)
        ];
    }

    private shoes() {
        return [
            this.pixel(1, 14, this.brown),
            this.pixel(2, 14, this.brown),
            this.pixel(3, 14, this.brown),
            this.pixel(8, 14, this.brown),
            this.pixel(9, 14, this.brown),
            this.pixel(10, 14, this.brown),

            this.pixel(0, 15, this.brown),
            this.pixel(1, 15, this.brown),
            this.pixel(2, 15, this.brown),
            this.pixel(3, 15, this.brown),

            this.pixel(8, 15, this.brown),
            this.pixel(9, 15, this.brown),
            this.pixel(10, 15, this.brown),
            this.pixel(11, 15, this.brown)
        ];
    }

    private pixel(x: number, y: number, color: string) {
        return new Rect(
            [this.draw(x), this.draw(y)],
            this.draw()
        ).color(color).lineColor(this.black).end;
    }

    private draw(num: number = 1): number {
        const blockSize = 40;
        return blockSize * num;
    }

}
