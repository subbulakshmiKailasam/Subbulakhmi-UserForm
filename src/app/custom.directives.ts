import { Directive, Input, ViewContainerRef, Compiler, ModuleWithComponentFactories, Type, NgModule, Component, OnChanges, ComponentRef, Output, EventEmitter, ElementRef, AfterViewInit, OnInit, Renderer2 } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as $ from 'jquery';


@Directive({
    selector: '[compile]'
})
export class CompileDirective implements OnChanges, AfterViewInit {
    @Input() compile: string;
    @Input() compileContext: any;
    compRef: ComponentRef<any>;

    constructor(private vcRef: ViewContainerRef, private compiler: Compiler, private elRef: ElementRef) {
        console.log(this.elRef.nativeElement)
     }
    ngAfterViewInit(): void {

    }
    ngOnChanges() {
        console.log(this.compile)
        console.log(this.compileContext)
        if (!this.compile) {
            if (this.compRef) {
                this.updateProperties();
                return;
            }
            throw Error('You forgot to provide template');
        }


        this.vcRef.clear();
        this.compRef = null;

        const component = this.createDynamicComponent(this.compile, this.compileContext);
        const module = this.createDynamicModule(component);
        this.compiler.compileModuleAndAllComponentsAsync(module)
            .then((moduleWithFactories: ModuleWithComponentFactories<any>) => {
                let compFactory = moduleWithFactories.componentFactories.find(x => x.componentType === component);
                console.log(compFactory)
                this.compRef = this.vcRef.createComponent(compFactory);
                console.log(this.compRef, "teest")
                //this.updateProperties();
            })
            .catch(error => {
                console.log(error);
            });
    }

    updateProperties() {
        // for(var prop in this.compileContext) {
        //   console.log(this.compileContext)
        //   console.log(this.compRef)
        //   this.compRef.instance[prop] = this.compileContext[prop];
        // }


        //        this.compRef.instance['array'] = this.compileContext
        // this.compRef.instance[1]['str2'] = this.compileContext[1]['str2']

        // this.compRef.instance[0] = this.compileContext
    }

    private createDynamicComponent(template: string, context) {
        @Component({
            selector: 'custom-dynamic-component',
            //templateUrl: 'custom.table.html',
            template: `<div class="row">
        <div class="col-md-6">
            Show 
            <select style="width: fit-content"  #e (change)="entry(e.value)">
                <option>2</option>
                <option>4</option>
                <option>3</option>
            </select>
            Entries
        </div>
        <div class="col-md-6" class="float margin-left">
            search
            <input type="text" style="width:fit-content">
        </div>
       
    </div>` + template + ` 
    <div class="row">
    <div class="col-md-6">
      Showing {{(start1)}} to {{end}} of {{length}} entries
    </div>
    <div class="col-md-6">
                         <a (click)="previous()"> previous</a> 
                          <button style="width:fit-content">{{page}}</button>
                        <a (click)="next()">  next</a>
                      </div>
                      </div>
    `
        })
        class CustomDynamicComponent implements OnInit,AfterViewInit {
            @Output('addNumberEvent')
            addNumEvent = new EventEmitter<number>();
            length: any;
            constructor(private elRef: ElementRef,private render : Renderer2) {
                this[context.name] = context.array;
                console.log(this[context.name])
                this.arrayList = this[context.name]
                this.length = this[context.name].length;
                $('th').append("<i class='fa fa-chevron-up'></i>");
                this.entry(2);
                
            }
            page: number;
            isPrevious: boolean;
            end: any;
            deniedList: any;
            isNext: boolean;
            noOfEntries: any;
            start: number = 0;
            deniedList2: any;
            arrayList: any;
            start1 = this.start + 1;
            icon = `<i class="fa fa-chevron-up"></i>`
            ngOnInit() {
               
            }

            ngAfterViewInit() {
                // assume dynamic HTML was added before
                let ele = this.elRef.nativeElement.querySelector('.fa-chevron-up')
            this.render.listen(ele, 'click', (event) => {
            let target = $(event.target);

                let prev = $(target).parent().css( "background-color", "red" );
                ;
                console.log($(prev).text());
                
               })

               // this.elRef.nativeElement.querySelector('.fa-chevron-up').addEventListener('click', this.sort());
              }
sort() {
    console.log("testing")
}
            checkPreviousNext() {
                if (this.page === 1) {
                    this.isPrevious = true;
                }
                else {
                    this.isPrevious = false;
                }

                // if (this.end === array.length) {
                this.isNext = true
                //  }
                //else {
                this.isNext = false;
                // }
            }

            entry(value) {
                console.log(value)
                this.noOfEntries = value;
                this.start = 0;
                this.page = 1;
                this.end = +this.noOfEntries;
                this.start1 = this.start + 1;
                this[context.name] = this.arrayList.slice(this.start, this.end);
                //  console.log(array)
                this.checkPreviousNext();
                //this.addNumEvent.emit(2);

            }
            previous() {
                if (this.page > 1) {
                    this.page = this.page - 1;
                    //let end = this.end;
                    this.end = this.start;
                    this.start = this.start - this.noOfEntries;
                    this.start1 = this.start + 1;
                    this[context.name] = this.arrayList.slice(this.start, this.end);
                    this.checkPreviousNext();

                }
            }

            next() {
                if (this.end < this.length) {
                    this.checkPreviousNext();
                    this.page = this.page + 1
                    this.start = this.end;
                    this.start1 = this.start + 1;
                    this.end = +this.noOfEntries + this.end;
                    this[context.name] = this.arrayList.slice(this.start, this.end)
                }

            }

        }
        return CustomDynamicComponent;
    }

    private createDynamicModule(component: Type<any>) {
        @NgModule({

            imports: [CommonModule],
            declarations: [component]
        })
        class DynamicModule { }
        return DynamicModule;
    }
}