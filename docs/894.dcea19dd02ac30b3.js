"use strict";(self.webpackChunkacacia_p3=self.webpackChunkacacia_p3||[]).push([[894],{2894:(St,R,l)=>{l.r(R),l.d(R,{ContractsModule:()=>Dt});var T=l(6895),h=l(9299),s=l(4006),S=l(8314),O=l(3151),p=l(4004),w=l(9195),x=l(7802),F=l(8522),A=(()=>{return(a=A||(A={}))[a.Monthly=1]="Monthly",a[a.Quarterly=2]="Quarterly",a[a.SemiAnnual=3]="SemiAnnual",a[a.Yearly=4]="Yearly",A;var a})(),Z=(()=>{return(a=Z||(Z={}))[a.Residential=1]="Residential",a[a.Commercial=2]="Commercial",Z;var a})(),B=l(926),t=l(4650),f=l(3848),V=l(8112);let k=(()=>{class a{constructor(e){this.xhrService=e}searchRealEstate(e){return this.xhrService.call({url:"/api/RealEstate/Search",method:f.n.post,body:e}).pipe((0,p.U)(n=>n))}getRealEstateProperties(e){return this.xhrService.call({url:`api/Property/GetRealEstateProperties/${e}`,method:f.n.get,body:{}}).pipe((0,p.U)(n=>n))}getRealEstateOwner(e){return this.xhrService.call({url:`api/RealEstateOwner/Get/${e}`,method:f.n.get,body:{}}).pipe((0,p.U)(n=>n))}createContract(e){return this.xhrService.call({url:"api/Contract/Create",method:f.n.post,body:e}).pipe((0,p.U)(n=>n))}searchContracts(e){return this.xhrService.call({url:"api/Contract/SearchContract",method:f.n.post,body:e}).pipe((0,p.U)(n=>n))}deleteContract(e){return this.xhrService.call({url:`api/Contract/Delete/${e}`,method:f.n.delete,body:{}}).pipe((0,p.U)(n=>n))}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(V.d))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),b=(()=>{class a{constructor(e){this.contractsService=e}createContract(e){return this.contractsService.createContract(e).pipe((0,p.U)(n=>n))}searchRealEstate(e){return this.contractsService.searchRealEstate(e).pipe((0,p.U)(n=>n))}searchContracts(e){return this.contractsService.searchContracts(e).pipe((0,p.U)(n=>n))}getRealEstateProperties(e){return this.contractsService.getRealEstateProperties(e).pipe((0,p.U)(n=>n))}getRealEstateOwner(e){return this.contractsService.getRealEstateOwner(e).pipe((0,p.U)(n=>n))}deleteContract(e){return this.contractsService.deleteContract(e).pipe((0,p.U)(n=>n))}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(k))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var U=l(629),G=l(2289),M=l(5412),W=l(6892),j=l(4081),P=l(8425),q=l(8952),$=l(3496),K=l(8412),v=l(9383);const J=function(a,r){return{start:a,end:r}};function H(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"locale-date-picker",39),t.NdJ("valueChanges",function(o){t.CHM(e);const i=t.oxw();return t.KtG(i.onChange(o))}),t.qZA()}if(2&a){const e=t.oxw();t.Q6J("label","LABELS.FORM.RENTAL_PERIOD")("FormControl",t.WLB(3,J,e.formControl("contractDuration","startDate"),e.formControl("contractDuration","endDate")))("isArabicDatePicker",!0)}}function X(a,r){if(1&a&&t._UZ(0,"locale-date-picker",40),2&a){const e=t.oxw();t.Q6J("label","CONTRACTS.CONTRACT_DURATION")("FormControl",t.WLB(3,J,e.formControl("contractDuration","startDate"),e.formControl("contractDuration","endDate")))("isArabicDatePicker",!1)}}function z(a,r){if(1&a&&(t.TgZ(0,"div",41)(1,"p"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div",42)(5,"div")(6,"span"),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"span"),t._uU(10),t.qZA()(),t.TgZ(11,"div")(12,"span"),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.TgZ(15,"span"),t._uU(16),t.qZA()(),t.TgZ(17,"div")(18,"span"),t._uU(19),t.ALo(20,"translate"),t.qZA(),t.TgZ(21,"span"),t._uU(22),t.qZA()()()()),2&a){const e=t.oxw();t.xp6(2),t.hij("",t.lcZ(3,7,"LABELS.RENTAL_PERIOD_AD")," : "),t.xp6(5),t.hij(" ",t.lcZ(8,9,"LABELS.YEARS")," "),t.xp6(3),t.hij(" ",e.calculatedContractDuration.years," "),t.xp6(3),t.hij(" ",t.lcZ(14,11,"LABELS.MONTHS")," "),t.xp6(3),t.hij(" ",e.calculatedContractDuration.months," "),t.xp6(3),t.hij(" ",t.lcZ(20,13,"LABELS.DAYS")," "),t.xp6(3),t.hij(" ",e.calculatedContractDuration.days," ")}}function tt(a,r){if(1&a&&t._UZ(0,"locale-date-picker",40),2&a){const e=t.oxw();t.Q6J("label","LABELS.FORM.DATE_OF_BIRTH")("FormControl",e.formControl("contractParties","tenantBirthDay"))("isArabicDatePicker",!0)}}function et(a,r){if(1&a&&t._UZ(0,"locale-date-picker",40),2&a){const e=t.oxw();t.Q6J("label","LABELS.FORM.DATE_OF_BIRTH")("FormControl",e.formControl("contractParties","tenantBirthDay"))("isArabicDatePicker",!1)}}function nt(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"form-input",21),t.NdJ("valueChanges",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.onTotalValueChange())}),t.qZA()}if(2&a){const e=t.oxw(2);t.Q6J("label","CONTRACTS.ELECTRICITY_FIXED_FEES")("type",e.InputTypes.NUMBER)("FormControl",e.formControl("financialDetails","electricityFixedFees"))}}function at(a,r){if(1&a&&t._UZ(0,"form-input",18),2&a){const e=t.oxw(2);t.Q6J("label","CONTRACTS.ELECTRICITY_CONSUMPTION")("type",e.InputTypes.NUMBER)("FormControl",e.formControl("financialDetails","electricityConsumption"))}}function ot(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"form-input",21),t.NdJ("valueChanges",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.onTotalValueChange())}),t.qZA()}if(2&a){const e=t.oxw(2);t.Q6J("label","CONTRACTS.GAS_FIXED_FEES")("type",e.InputTypes.NUMBER)("FormControl",e.formControl("financialDetails","gasFixedFees"))}}function rt(a,r){if(1&a&&t._UZ(0,"form-input",18),2&a){const e=t.oxw(2);t.Q6J("label","CONTRACTS.GAS_CONSUMPTION")("type",e.InputTypes.NUMBER)("FormControl",e.formControl("financialDetails","gasConsumption"))}}function it(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"form-input",21),t.NdJ("valueChanges",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.onTotalValueChange())}),t.qZA()}if(2&a){const e=t.oxw(2);t.Q6J("label","CONTRACTS.WATER_FIXED_FEES")("type",e.InputTypes.NUMBER)("FormControl",e.formControl("financialDetails","waterFixedFees"))}}function lt(a,r){if(1&a&&t._UZ(0,"form-input",18),2&a){const e=t.oxw(2);t.Q6J("label","CONTRACTS.WATER_CONSUMPTION")("type",e.InputTypes.NUMBER)("FormControl",e.formControl("financialDetails","waterConsumption"))}}const y=function(a){return{key:1,value:a}},E=function(a){return{key:2,value:a}},N=function(a,r){return[a,r]};function st(a,r){if(1&a){const e=t.EpF();t.ynx(0),t.TgZ(1,"h6"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div",13)(5,"div",25)(6,"form-input",43),t.NdJ("valueChanges",function(o){t.CHM(e);const i=t.oxw();return t.KtG(i.onFeesValueChange(o,i.formControl("financialDetails","electricityFixedFees"),i.formControl("financialDetails","electricityConsumption")))}),t.ALo(7,"translate"),t.ALo(8,"translate"),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"div",9),t.YNc(11,nt,1,3,"form-input",44),t.YNc(12,at,1,3,"form-input",45),t.qZA()(),t.TgZ(13,"h6"),t._uU(14),t.ALo(15,"translate"),t.qZA(),t.TgZ(16,"div",13)(17,"div",25)(18,"form-input",43),t.NdJ("valueChanges",function(o){t.CHM(e);const i=t.oxw();return t.KtG(i.onFeesValueChange(o,i.formControl("financialDetails","gasFixedFees"),i.formControl("financialDetails","gasConsumption")))}),t.ALo(19,"translate"),t.ALo(20,"translate"),t.ALo(21,"translate"),t.qZA()(),t.TgZ(22,"div",9),t.YNc(23,ot,1,3,"form-input",44),t.YNc(24,rt,1,3,"form-input",45),t.qZA()(),t.TgZ(25,"h6"),t._uU(26),t.ALo(27,"translate"),t.qZA(),t.TgZ(28,"div",13)(29,"div",25)(30,"form-input",43),t.NdJ("valueChanges",function(o){t.CHM(e);const i=t.oxw();return t.KtG(i.onFeesValueChange(o,i.formControl("financialDetails","waterFixedFees"),i.formControl("financialDetails","waterConsumption")))}),t.ALo(31,"translate"),t.ALo(32,"translate"),t.ALo(33,"translate"),t.qZA()(),t.TgZ(34,"div",9),t.YNc(35,it,1,3,"form-input",44),t.YNc(36,lt,1,3,"form-input",45),t.qZA()(),t.BQk()}if(2&a){const e=t.oxw();t.xp6(2),t.hij("",t.lcZ(3,21,"CONTRACTS.ELECTRICITY_FEES"),": "),t.xp6(4),t.Q6J("label",t.lcZ(7,23,"CONTRACTS.ELECTRICITY_FEES"))("type",e.InputTypes.RADIO)("radioOptions",t.WLB(49,N,t.VKq(45,y,t.lcZ(8,25,"CONTRACTS.FIXED_AMOUNT")),t.VKq(47,E,t.lcZ(9,27,"CONTRACTS.CONSUMPTION"))))("FormControl",e.formControl("financialDetails","selectedElectricityOption")),t.xp6(5),t.Q6J("ngIf",1===e.formControl("financialDetails","selectedElectricityOption").value),t.xp6(1),t.Q6J("ngIf",2===e.formControl("financialDetails","selectedElectricityOption").value),t.xp6(2),t.hij("",t.lcZ(15,29,"CONTRACTS.GAS_FEES"),": "),t.xp6(4),t.Q6J("label",t.lcZ(19,31,"CONTRACTS.GAS_FIXED_FEES"))("type",e.InputTypes.RADIO)("radioOptions",t.WLB(56,N,t.VKq(52,y,t.lcZ(20,33,"CONTRACTS.FIXED_AMOUNT")),t.VKq(54,E,t.lcZ(21,35,"CONTRACTS.CONSUMPTION"))))("FormControl",e.formControl("financialDetails","selectedGasOption")),t.xp6(5),t.Q6J("ngIf",1===e.formControl("financialDetails","selectedGasOption").value),t.xp6(1),t.Q6J("ngIf",2===e.formControl("financialDetails","selectedGasOption").value),t.xp6(2),t.hij("",t.lcZ(27,37,"CONTRACTS.WATER_FEES"),": "),t.xp6(4),t.Q6J("label",t.lcZ(31,39,"CONTRACTS.WATER_FEES"))("type",e.InputTypes.RADIO)("radioOptions",t.WLB(63,N,t.VKq(59,y,t.lcZ(32,41,"CONTRACTS.FIXED_AMOUNT")),t.VKq(61,E,t.lcZ(33,43,"CONTRACTS.CONSUMPTION"))))("FormControl",e.formControl("financialDetails","selectedWaterOption")),t.xp6(5),t.Q6J("ngIf",1===e.formControl("financialDetails","selectedWaterOption").value),t.xp6(1),t.Q6J("ngIf",2===e.formControl("financialDetails","selectedWaterOption").value)}}function ct(a,r){1&a&&(t.TgZ(0,"div",46),t._UZ(1,"i",47),t.TgZ(2,"p",48),t._uU(3),t.ALo(4,"translate"),t.qZA()()),2&a&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"LABELS.FORM.VALIDATIONS.COMMISSION_CAN_NOT_EXCEED")))}function pt(a,r){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.ALo(6,"date"),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"translate"),t.qZA()()),2&a){const e=r.$implicit;t.xp6(2),t.Oqu(t.xi3(3,4,e.issuingDate,"yyyy-MM-dd")),t.xp6(3),t.Oqu(t.xi3(6,7,e.dueDate,"yyyy-MM-dd")),t.xp6(3),t.AsE("",+(null==e.totalInvoiceValue?null:e.totalInvoiceValue.toFixed(2))," ",t.lcZ(9,10,"LABELS.SAR")," ")}}function ut(a,r){if(1&a&&(t.TgZ(0,"div",49)(1,"table")(2,"tr")(3,"th"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"th"),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"th"),t._uU(10),t.ALo(11,"translate"),t.qZA()(),t.YNc(12,pt,10,12,"tr",50),t.qZA()()),2&a){const e=t.oxw();t.xp6(4),t.hij(" ",t.lcZ(5,4,"PROPERTY.ISSUING_DATE")," "),t.xp6(3),t.hij(" ",t.lcZ(8,6,"CONTRACTS.DUE_DATE")," "),t.xp6(3),t.Oqu(t.lcZ(11,8,"CONTRACTS.INVOICE_VALUE")),t.xp6(2),t.Q6J("ngForOf",e.installmentPlanTable)}}function dt(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.handleBack())}),t._uU(1),t.ALo(2,"translate"),t.qZA()}2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"ACTIONS.BACK")," "))}function Ct(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"button",51),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.handleNext())}),t._uU(1),t.ALo(2,"translate"),t.qZA()}2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"ACTIONS.NEXT")," "))}const I=function(a){return{list:a,key:"id",value:"name"}},mt=function(a){return{list:a,key:"id",value:"propertyNumber"}},gt=function(a,r){return{checked:!0,key:a,value:r}},D=function(a,r){return{key:a,value:r}},Tt=function(a,r,e,n){return[a,r,e,n]};let Y=(()=>{class a{constructor(e,n,o,i,c,u,g,C,m){this.fb=e,this.contractsLogicService=n,this.translationService=o,this.dialog=c,this.toastrService=u,this.activatedRoute=g,this.router=C,this.lookupsService=m,this.selectedIndex=0,this.subs=new w.t,this.editMode=!1,this.installmentPlanTable=[],this.addEditContract=this.fb.group({contractDuration:this.fb.group({startDate:["",[s.kI.required]],endDate:["",[s.kI.required]],rentalperiod:[null]}),propertyUnitDetails:this.fb.group({realEstateUseId:[null,[s.kI.required]],realEstateTypeId:[null,[s.kI.required]],realEstateId:[null,[s.kI.required]],propertyId:[null,[s.kI.required]]}),contractParties:this.fb.group({name:[""],nationalId:[null],tenantName:["",[s.kI.required]],tenantNationalId:[null,[s.kI.required,s.kI.pattern("^[0-9]{10}$")]],tenantBirthDay:["",[s.kI.required]],tenantTelephone:[null,[s.kI.required,s.kI.pattern("^[0-9]{10}$")]],email:["",[s.kI.required,s.kI.email]]}),financialDetails:this.fb.group({annualRentalFees:[null,[s.kI.required]],electricityFixedFees:[null],services:[!1],electricityConsumption:[null],selectedElectricityOption:[null],selectedGasOption:[null],selectedWaterOption:[null],gasFixedFees:[null],gasConsumption:[null],waterFixedFees:[null],waterConsumption:[null],paymentWay:[1,[s.kI.required]],totalValue:[null],insuranceAmount:[null,[s.kI.required]],commissionAmount:[null,[s.kI.required]]},{validators:(0,B.y)("commissionAmount","annualRentalFees")})}),this.stepperOrientation=i.observe("(min-width: 800px)").pipe((0,p.U)(({matches:d})=>d?"horizontal":"vertical"))}ngOnInit(){this.realestateId=+this.activatedRoute.snapshot.params.id,this.editMode=!!this.realestateId,this.subs.add=this.translationService.currentLanguage$.subscribe(e=>{this.currentLang=e,this.propertyTypes$=this.lookupsService.getPropertyLookup("RealEstateType").pipe((0,O.d)(1)),this.propertyUsageTypes$=this.lookupsService.getPropertyLookup("RealEstateUse").pipe((0,O.d)(1))})}onChange(e){this.calculatedContractDuration=null,e.endValue&&(this.calculatedContractDuration=this.getDateDuration(new Date(e.startValue),new Date(e.endValue)),console.log(this.calculatedContractDuration))}getDateDuration(e,n){const o=e.getFullYear(),i=e.getMonth(),c=e.getDate(),u=n.getFullYear(),g=n.getMonth();let m=u-o,d=g-i,_=n.getDate()-c;const Rt=Math.round(Math.abs((n.getTime()-e.getTime())/864e5));return _<0&&(_+=new Date(u,g+1,0).getDate(),d--),d<0&&(d+=12,m--),{years:m,months:d,days:_,diffInDays:Rt}}onPropertyTypeChange(e){this.formControl("propertyUnitDetails","realEstateId").reset(),this.formControl("propertyUnitDetails","propertyId").reset();const n={realEstateTypeId:this.formControl("propertyUnitDetails","realEstateTypeId").value,realEstateUseId:this.formControl("propertyUnitDetails","realEstateUseId").value};this.realEstateOptions$=this.contractsLogicService.searchRealEstate(n).pipe((0,O.d)(1))}onRealEstateChange(e){this.formControl("propertyUnitDetails","propertyId").reset(),this.subs.add=this.realEstateOptions$.subscribe(n=>this.realEstateName=n.find(o=>o.id===e.event.value).name),this.propertiesOptions$=this.contractsLogicService.getRealEstateProperties(e.event.value).pipe((0,O.d)(1)),this.contractsLogicService.getRealEstateOwner(e.event.value).subscribe(n=>{this.formControl("contractParties","name").setValue(n.name),this.formControl("contractParties","nationalId").setValue(n.ownerNationalId)})}onPropertyChange(e){this.subs.add=this.propertiesOptions$.subscribe(n=>this.unitNumber=+n.find(o=>o.id===e.event.value).propertyNumber)}onServicesChange(e){this.formControl("financialDetails","selectedGasOption").reset(),this.formControl("financialDetails","selectedElectricityOption").reset(),this.formControl("financialDetails","selectedWaterOption").reset(),this.formControl("financialDetails","electricityFixedFees").reset(),this.formControl("financialDetails","electricityConsumption").reset(),this.formControl("financialDetails","gasFixedFees").reset(),this.formControl("financialDetails","gasConsumption").reset(),this.formControl("financialDetails","waterFixedFees").reset(),this.formControl("financialDetails","waterConsumption").reset()}onFeesValueChange(e,n,o){1===e?this.setControlsValiditions(n,o):this.setControlsValiditions(o,n)}setControlsValiditions(e,n){e.addValidators([s.kI.required]),n.removeValidators([s.kI.required]),e.updateValueAndValidity(),n.updateValueAndValidity()}onTotalValueChange(){const e=this.formControl("financialDetails","gasFixedFees").value+this.formControl("financialDetails","electricityFixedFees").value+this.formControl("financialDetails","waterFixedFees").value+this.formControl("financialDetails","annualRentalFees").value;this.formControl("financialDetails","totalValue").setValue(e)}generateInstallmentPlanTable(e,n,o,i){const c=[];let C,m,d,u=new Date(e),g=new Date(e.getTime()+864e6);i===A.Monthly?(m=12,d=3e4,C=(n+o)/12):i===A.Quarterly?(m=4,d=9e4,C=(n+o)/4):i===A.SemiAnnual?(m=2,d=182e3,C=(n+o)/2):(m=1,d=365e3,C=n+o),c.push({issuingDate:u,dueDate:g,totalInvoiceValue:C,feesInvoiceValue:0,rentInvoiceValue:0});for(let _=1;_<m;_++)u=new Date(g.getTime()+86400*d),g=new Date(u.getTime()+864e6),c.push({issuingDate:u,dueDate:g,totalInvoiceValue:C,feesInvoiceValue:0,rentInvoiceValue:0});return console.log(c),c}onSelection(e){this.selectedIndex=e.selectedIndex,console.log(this.selectedIndex),4===this.selectedIndex&&this.formControl("financialDetails","annualRentalFees").value&&this.formControl("contractDuration","startDate")?.value&&(this.installmentPlanTable=this.generateInstallmentPlanTable(new Date(this.formControl("contractDuration","startDate")?.value),this.formControl("financialDetails","annualRentalFees").value,this.formControl("financialDetails","gasFixedFees").value+this.formControl("financialDetails","electricityFixedFees").value+this.formControl("financialDetails","waterFixedFees").value,this.formControl("financialDetails","paymentWay").value))}handleNext(){this.selectedIndex<5&&this.selectedIndex++}handleBack(){this.selectedIndex>0&&this.selectedIndex--}handleCancel(){this.router.navigateByUrl("/contracts")}formControl(e,n){return this.addEditContract?.get(e)?.get(n)}formGroup(e){return this.addEditContract?.get(e)}onAddContract(e){console.log(e),this.contractsLogicService.createContract({startDate:e.value.contractDuration.startDate,endDate:e.value.contractDuration.endDate,rentalperiod:this.calculatedContractDuration.diffInDays,annualRentalFees:e.value.financialDetails.annualRentalFees,electricityFixedFees:e.value.financialDetails.electricityFixedFees,electricityConsumption:e.value.financialDetails.electricityFixedFees,gasFixedFees:e.value.financialDetails.gasFixedFees,gasConsumption:e.value.financialDetails.gasConsumption,waterFixedFees:e.value.financialDetails.waterFixedFees,waterConsumption:e.value.financialDetails.waterConsumption,totalValue:e.value.financialDetails.totalValue,insuranceAmount:e.value.financialDetails.insuranceAmount,commissionAmount:e.value.financialDetails.commissionAmount,paymentWay:e.value.financialDetails.paymentWay,contractType:Z.Commercial,totalTaxesAmount:50,propertyId:e.value.propertyUnitDetails.propertyId,installment:this.installmentPlanTable,tenantData:{name:e.value.contractParties.name,tenantNationalId:e.value.contractParties.tenantNationalId,telephone:e.value.contractParties.tenantTelephone,birthDay:e.value.contractParties.tenantBirthDay,email:e.value.contractParties.email}}).subscribe(o=>{this.toastrService.showToastr("Contract Created successfully",F.V.success),this.router.navigateByUrl("/contracts")},()=>{this.toastrService.showToastr("An error occured when executing the create statement ,try again !",F.V.error)})}editRealEstate(){}get InputTypes(){return S.o}get PaymentWay(){return A}get Lang(){return x.U}ngOnDestroy(){this.subs.unsubscribe()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(s.qu),t.Y36(b),t.Y36(U.D),t.Y36(G.Yg),t.Y36(M.uw),t.Y36(W._),t.Y36(h.gz),t.Y36(h.F0),t.Y36(j.K))},a.\u0275cmp=t.Xpm({type:a,selectors:[["add-contract"]],decls:169,vars:216,consts:[["RtlDir","",1,"add-edit-page"],[1,"content-container"],["autocomplete","off",3,"formGroup","ngSubmit"],["RtlDir","",1,"form-stepper",3,"orientation","selectedIndex","selectionChange"],[3,"label","stepControl"],["autocomplete","off",3,"formGroup"],[1,"tab-container"],[1,"tab-headline"],[1,"form-wrapper"],[1,"form-control-wrapper"],[3,"label","FormControl","isArabicDatePicker","valueChanges",4,"ngIf"],[3,"label","FormControl","isArabicDatePicker",4,"ngIf"],["class","duration-container",4,"ngIf"],[1,"form-row"],[3,"label","type","selectOptions","FormControl"],[3,"label","type","selectOptions","FormControl","selectedOption"],[3,"label","type","isReadonly","FormControl"],[3,"label","type","FormControl","isReadonly"],[3,"label","type","FormControl"],[3,"label","iconClass","type","FormControl","valueChanges"],[1,"form-toggle-wrapper"],[3,"label","type","FormControl","valueChanges"],[4,"ngIf"],[1,"font-weight-bold"],[1,"mt-4","mb-0"],[1,"form-radio-wrapper"],[3,"label","type","radioOptions","FormControl"],[3,"label","type","FormControl","isReadonly","iconClass"],[3,"label","type","FormControl","iconClass"],["class","error-message",4,"ngIf"],[1,"details-container"],[1,"details-row"],[1,"details-col"],["class","details-container mt-3",4,"ngIf"],[1,"add-edit-actions","mt-1"],["type","button",1,"ac-btn","btn-outlined",3,"click"],["type","button","class","ac-btn btn-outlined",3,"click",4,"ngIf"],["type","button","class","ac-btn btn-fill",3,"click",4,"ngIf"],["type","submit",1,"ac-btn","btn-outlined",3,"disabled"],[3,"label","FormControl","isArabicDatePicker","valueChanges"],[3,"label","FormControl","isArabicDatePicker"],[1,"duration-container"],[1,"duration-wrapper"],[3,"label","type","radioOptions","FormControl","valueChanges"],[3,"label","type","FormControl","valueChanges",4,"ngIf"],[3,"label","type","FormControl",4,"ngIf"],[1,"error-message"],[1,"mat-error","fa-solid","fa-xmark"],[1,"mat-error"],[1,"details-container","mt-3"],[4,"ngFor","ngForOf"],["type","button",1,"ac-btn","btn-fill",3,"click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return n.onAddContract(n.addEditContract)}),t.TgZ(3,"mat-stepper",3),t.NdJ("selectionChange",function(i){return n.onSelection(i)}),t.ALo(4,"async"),t.TgZ(5,"mat-step",4),t.ALo(6,"translate"),t.TgZ(7,"form",5)(8,"div",6)(9,"h4",7),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"div",8)(13,"div",9),t.YNc(14,H,1,6,"locale-date-picker",10),t.YNc(15,X,1,6,"locale-date-picker",11),t.YNc(16,z,23,15,"div",12),t.qZA()()()()(),t.TgZ(17,"mat-step",4),t.ALo(18,"translate"),t.TgZ(19,"form",5)(20,"div",6)(21,"h4",7),t._uU(22),t.ALo(23,"translate"),t.qZA(),t.TgZ(24,"div",8)(25,"div",13)(26,"div",9),t._UZ(27,"form-input",14),t.ALo(28,"translate"),t.ALo(29,"async"),t.qZA(),t.TgZ(30,"div",9)(31,"form-input",15),t.NdJ("selectedOption",function(i){return n.onPropertyTypeChange(i)}),t.ALo(32,"translate"),t.ALo(33,"async"),t.qZA()()(),t.TgZ(34,"div",13)(35,"div",9)(36,"form-input",15),t.NdJ("selectedOption",function(i){return n.onRealEstateChange(i)}),t.ALo(37,"translate"),t.ALo(38,"async"),t.qZA()(),t.TgZ(39,"div",9)(40,"form-input",15),t.NdJ("selectedOption",function(i){return n.onPropertyChange(i)}),t.ALo(41,"translate"),t.ALo(42,"async"),t.qZA()()()()()()(),t.TgZ(43,"mat-step",4),t.ALo(44,"translate"),t.TgZ(45,"form",5)(46,"div",6)(47,"h4",7),t._uU(48),t.ALo(49,"translate"),t.qZA(),t.TgZ(50,"div",8)(51,"h6"),t._uU(52),t.ALo(53,"translate"),t.qZA(),t.TgZ(54,"div",13)(55,"div",9),t._UZ(56,"form-input",16),t.qZA(),t.TgZ(57,"div",9),t._UZ(58,"form-input",17),t.qZA()(),t.TgZ(59,"h6"),t._uU(60),t.ALo(61,"translate"),t.qZA(),t.TgZ(62,"div",13)(63,"div",9),t._UZ(64,"form-input",18),t.qZA(),t.TgZ(65,"div",9),t._UZ(66,"form-input",18),t.qZA()(),t.TgZ(67,"div",13)(68,"div",9),t.YNc(69,tt,1,3,"locale-date-picker",11),t.YNc(70,et,1,3,"locale-date-picker",11),t.qZA(),t.TgZ(71,"div",9),t._UZ(72,"form-input",18),t.qZA()(),t.TgZ(73,"div",9),t._UZ(74,"form-input",18),t.qZA()()()()(),t.TgZ(75,"mat-step",4),t.ALo(76,"translate"),t.TgZ(77,"form",5)(78,"div",6)(79,"h4",7),t._uU(80),t.ALo(81,"translate"),t.qZA(),t.TgZ(82,"div",8)(83,"div",9)(84,"form-input",19),t.NdJ("valueChanges",function(){return n.onTotalValueChange()}),t.qZA()(),t.TgZ(85,"div",20)(86,"form-input",21),t.NdJ("valueChanges",function(i){return n.onServicesChange(i)}),t.ALo(87,"translate"),t.qZA()(),t.YNc(88,st,37,66,"ng-container",22),t.TgZ(89,"h5",23),t._uU(90),t.ALo(91,"translate"),t.qZA(),t.TgZ(92,"h6",24),t._uU(93),t.ALo(94,"translate"),t.qZA(),t.TgZ(95,"div",25),t._UZ(96,"form-input",26),t.ALo(97,"translate"),t.ALo(98,"translate"),t.ALo(99,"translate"),t.ALo(100,"translate"),t.ALo(101,"translate"),t.qZA(),t.TgZ(102,"div",9),t._UZ(103,"form-input",27),t.qZA(),t.TgZ(104,"div",9),t._UZ(105,"form-input",28),t.qZA(),t.TgZ(106,"div",9),t._UZ(107,"form-input",18),t.YNc(108,ct,5,3,"div",29),t.qZA()()()()(),t.TgZ(109,"mat-step",4),t.ALo(110,"translate"),t.TgZ(111,"div",6)(112,"form",5)(113,"h4",7),t._uU(114),t.ALo(115,"translate"),t.qZA(),t.TgZ(116,"div",8)(117,"div",30)(118,"div",31)(119,"div",32)(120,"span"),t._uU(121),t.ALo(122,"translate"),t.qZA(),t.TgZ(123,"span"),t._uU(124),t.ALo(125,"date"),t.qZA()(),t.TgZ(126,"div",32)(127,"span"),t._uU(128),t.ALo(129,"translate"),t.qZA(),t.TgZ(130,"span"),t._uU(131),t.ALo(132,"date"),t.qZA()(),t.TgZ(133,"div",32)(134,"span"),t._uU(135),t.ALo(136,"translate"),t.qZA(),t.TgZ(137,"span"),t._uU(138),t.qZA()()(),t.TgZ(139,"div",31)(140,"div",32)(141,"span"),t._uU(142),t.ALo(143,"translate"),t.qZA(),t.TgZ(144,"span"),t._uU(145),t.qZA()(),t.TgZ(146,"div",32)(147,"span"),t._uU(148),t.ALo(149,"translate"),t.qZA(),t.TgZ(150,"span"),t._uU(151),t.qZA()(),t.TgZ(152,"div",32)(153,"span"),t._uU(154),t.ALo(155,"translate"),t.qZA(),t.TgZ(156,"span"),t._uU(157),t.qZA()()()(),t.YNc(158,ut,13,10,"div",33),t.qZA()()()()(),t.TgZ(159,"div",34)(160,"div")(161,"button",35),t.NdJ("click",function(){return n.handleCancel()}),t._uU(162),t.ALo(163,"translate"),t.qZA(),t.YNc(164,dt,3,3,"button",36),t.YNc(165,Ct,3,3,"button",37),t.TgZ(166,"button",38),t._uU(167),t.ALo(168,"translate"),t.qZA()()()()()()),2&e){let o,i,c,u;t.xp6(2),t.Q6J("formGroup",n.addEditContract),t.xp6(1),t.Q6J("orientation",t.lcZ(4,111,n.stepperOrientation))("selectedIndex",n.selectedIndex),t.xp6(2),t.Q6J("label",t.lcZ(6,113,"CONTRACTS.CONTRACT_DURATION"))("stepControl",n.formGroup("contractDuration")),t.xp6(2),t.Q6J("formGroup",n.formGroup("contractDuration")),t.xp6(3),t.Oqu(t.lcZ(11,115,"CONTRACTS.ADD_CONTRACT_DURATION")),t.xp6(4),t.Q6J("ngIf",n.currentLang===n.Lang.arabic),t.xp6(1),t.Q6J("ngIf",n.currentLang!==n.Lang.arabic),t.xp6(1),t.Q6J("ngIf",n.calculatedContractDuration),t.xp6(1),t.Q6J("label",t.lcZ(18,117,"CONTRACTS.PROPERTY_AND_UNITS"))("stepControl",n.formGroup("propertyUnitDetails")),t.xp6(2),t.Q6J("formGroup",n.formGroup("propertyUnitDetails")),t.xp6(3),t.Oqu(t.lcZ(23,119,"CONTRACTS.PROPERTY_AND_UNITS")),t.xp6(5),t.Q6J("label",t.lcZ(28,121,"PROPERTY.PROPERTY_USAGE"))("type",n.InputTypes.SELECT)("selectOptions",t.VKq(191,I,t.lcZ(29,123,n.propertyUsageTypes$)))("FormControl",n.formControl("propertyUnitDetails","realEstateUseId")),t.xp6(4),t.Q6J("label",t.lcZ(32,125,"PROPERTY.PROPERTY_TYPE"))("type",n.InputTypes.SELECT)("selectOptions",t.VKq(193,I,t.lcZ(33,127,n.propertyTypes$)))("FormControl",n.formControl("propertyUnitDetails","realEstateTypeId")),t.xp6(5),t.Q6J("label",t.lcZ(37,129,"CONTRACTS.CHOOSE_THE_PROPERTY"))("type",n.InputTypes.SELECT)("selectOptions",t.VKq(195,I,t.lcZ(38,131,n.realEstateOptions$)))("FormControl",n.formControl("propertyUnitDetails","realEstateId")),t.xp6(4),t.Q6J("label",t.lcZ(41,133,"CONTRACTS.CHOOSE_THE_UNIT"))("type",n.InputTypes.SELECT)("selectOptions",t.VKq(197,mt,t.lcZ(42,135,n.propertiesOptions$)))("FormControl",n.formControl("propertyUnitDetails","propertyId")),t.xp6(3),t.Q6J("label",t.lcZ(44,137,"CONTRACTS.CONTRACT_PARTIES"))("stepControl",n.formGroup("contractParties")),t.xp6(2),t.Q6J("formGroup",n.formGroup("contractParties")),t.xp6(3),t.Oqu(t.lcZ(49,139,"CONTRACTS.CONTRACT_PARTIES")),t.xp6(4),t.hij("",t.lcZ(53,141,"LABELS.OWNER"),": "),t.xp6(4),t.Q6J("label","LABELS.FORM.FULL_NAME")("type",n.InputTypes.TEXT)("isReadonly",!0)("FormControl",n.formControl("contractParties","name")),t.xp6(2),t.Q6J("label","PROPERTY.NATIONAL_ID")("type",n.InputTypes.TEXT)("FormControl",n.formControl("contractParties","nationalId"))("isReadonly",!0),t.xp6(2),t.hij("",t.lcZ(61,143,"CONTRACTS.TENANT"),": "),t.xp6(4),t.Q6J("label","CONTRACTS.TENANT_NAME")("type",n.InputTypes.TEXT)("FormControl",n.formControl("contractParties","tenantName")),t.xp6(2),t.Q6J("label","PROPERTY.NATIONAL_ID")("type",n.InputTypes.NUMBER)("FormControl",n.formControl("contractParties","tenantNationalId")),t.xp6(3),t.Q6J("ngIf",n.currentLang===n.Lang.arabic),t.xp6(1),t.Q6J("ngIf",n.currentLang!==n.Lang.arabic),t.xp6(2),t.Q6J("label","LABELS.FORM.TELEPHONE")("type",n.InputTypes.NUMBER)("FormControl",n.formControl("contractParties","tenantTelephone")),t.xp6(2),t.Q6J("label","LABELS.FORM.EMAIL")("type",n.InputTypes.EMAIL)("FormControl",n.formControl("contractParties","email")),t.xp6(1),t.Q6J("label",t.lcZ(76,145,"CONTRACTS.FINANCIAL_DATA"))("stepControl",n.formGroup("financialDetails")),t.xp6(2),t.Q6J("formGroup",n.formGroup("financialDetails")),t.xp6(3),t.Oqu(t.lcZ(81,147,"CONTRACTS.FINANCIAL_DATA")),t.xp6(4),t.Q6J("label","CONTRACTS.ANNUAL_FEES_FOR_RENTAL")("iconClass",!0)("type",n.InputTypes.NUMBER)("FormControl",n.formControl("financialDetails","annualRentalFees")),t.xp6(2),t.Q6J("label",t.lcZ(87,149,"PROPERTY.SERVICES"))("type",n.InputTypes.TOGGLE)("FormControl",n.formControl("financialDetails","services")),t.xp6(2),t.Q6J("ngIf",n.formControl("financialDetails","services").value),t.xp6(2),t.hij("",t.lcZ(91,151,"CONTRACTS.PAYMENTS")," "),t.xp6(3),t.hij("",t.lcZ(94,153,"CONTRACTS.REPEATED_PAYMENTS"),": "),t.xp6(3),t.Q6J("label",t.lcZ(97,155,"CONTRACTS.PAYMENTS"))("type",n.InputTypes.RADIO)("radioOptions",t.l5B(211,Tt,t.WLB(199,gt,n.PaymentWay.Monthly,t.lcZ(98,157,"CONTRACTS.MONTHLY")),t.WLB(202,D,n.PaymentWay.Quarterly,t.lcZ(99,159,"CONTRACTS.PER_QUARTER")),t.WLB(205,D,n.PaymentWay.SemiAnnual,t.lcZ(100,161,"CONTRACTS.HAIF_YEAR")),t.WLB(208,D,n.PaymentWay.Yearly,t.lcZ(101,163,"CONTRACTS.YEARLY"))))("FormControl",n.formControl("financialDetails","paymentWay")),t.xp6(7),t.Q6J("label","CONTRACTS.TOTAL_VALUE_OF_CONTRACT")("type",n.InputTypes.NUMBER)("FormControl",n.formControl("financialDetails","totalValue"))("isReadonly",!0)("iconClass",!0),t.xp6(2),t.Q6J("label","CONTRACTS.INSURANCE_AMOUNT")("type",n.InputTypes.NUMBER)("FormControl",n.formControl("financialDetails","insuranceAmount"))("iconClass",!0),t.xp6(2),t.Q6J("label","CONTRACTS.COMMISSION")("type",n.InputTypes.NUMBER)("FormControl",n.formControl("financialDetails","commissionAmount")),t.xp6(1),t.Q6J("ngIf",n.formControl("financialDetails","commissionAmount").touched&&n.formGroup("financialDetails").errors&&n.formGroup("financialDetails").errors.compareValuesPercentage),t.xp6(1),t.Q6J("label",t.lcZ(110,165,"CONTRACTS.CONFIRMATION"))("stepControl",n.formGroup("contractDuration")),t.xp6(3),t.Q6J("formGroup",n.formGroup("financialDetails")),t.xp6(2),t.Oqu(t.lcZ(115,167,"CONTRACTS.CONFIRMATION")),t.xp6(7),t.Oqu(t.lcZ(122,169,"LABELS.FORM.STARTING_DATE")),t.xp6(3),t.Oqu(t.xi3(125,171,null==(o=n.formControl("contractDuration","startDate"))?null:o.value,"yyyy-MM-dd")),t.xp6(4),t.Oqu(t.lcZ(129,174,"LABELS.FORM.END_DATE")),t.xp6(3),t.Oqu(t.xi3(132,176,null==(i=n.formControl("contractDuration","endDate"))?null:i.value,"yyyy-MM-dd")),t.xp6(4),t.Oqu(t.lcZ(136,179,"LABELS.OWNER_NAME")),t.xp6(3),t.hij(" ",null==(c=n.formControl("contractParties","name"))?null:c.value," "),t.xp6(4),t.Oqu(t.lcZ(143,181,"CONTRACTS.TENANT_NAME")),t.xp6(3),t.Oqu(null==(u=n.formControl("contractParties","tenantName"))?null:u.value),t.xp6(3),t.Oqu(t.lcZ(149,183,"LABELS.REAL_ESTATE_NAME")),t.xp6(3),t.hij(" ",n.realEstateName," "),t.xp6(3),t.Oqu(t.lcZ(155,185,"PROPERTY.UNIT_NUMBER")),t.xp6(3),t.hij(" ",n.unitNumber," "),t.xp6(1),t.Q6J("ngIf",n.installmentPlanTable.length>0),t.xp6(4),t.hij(" ",t.lcZ(163,187,"ACTIONS.CANCEL")," "),t.xp6(2),t.Q6J("ngIf",n.selectedIndex>0),t.xp6(1),t.Q6J("ngIf",4!==n.selectedIndex),t.xp6(1),t.Q6J("disabled",n.addEditContract.invalid),t.xp6(1),t.hij(" ",t.lcZ(168,189,"ACTIONS.SAVE")," ")}},dependencies:[T.sg,T.O5,P.C0,P.Vq,q.C,s._Y,s.JL,s.sg,$.s,K.L,T.Ov,T.uU,v.X$],styles:[".add-edit-page[_ngcontent-%COMP%]   .form-control-wrapper[_ngcontent-%COMP%]   .duration-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:700}.add-edit-page[_ngcontent-%COMP%]   .form-control-wrapper[_ngcontent-%COMP%]   .duration-container[_ngcontent-%COMP%]   .duration-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;margin:16px 0;background-color:#eee;padding:10px 0;border-radius:8px}.add-edit-page[_ngcontent-%COMP%]   .form-control-wrapper[_ngcontent-%COMP%]   .duration-container[_ngcontent-%COMP%]   .duration-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:10px}.add-edit-page[_ngcontent-%COMP%]   .form-control-wrapper[_ngcontent-%COMP%]   .duration-container[_ngcontent-%COMP%]   .duration-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type{font-weight:700}.add-edit-page[_ngcontent-%COMP%]   .form-control-wrapper[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{margin-top:-20px}.add-edit-page[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.add-edit-page[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{text-align:center}.add-edit-page[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .add-edit-page[_ngcontent-%COMP%]   .details-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:10px 0}"]}),a})();var Q=l(9646),At=l(2026),ft=l(4859),L=l(8255),_t=l(7633);function ht(a,r){1&a&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"th"),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"th"),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"th"),t._uU(11),t.ALo(12,"translate"),t.qZA(),t.TgZ(13,"th"),t._uU(14),t.ALo(15,"translate"),t.qZA(),t.TgZ(16,"th"),t._uU(17),t.ALo(18,"translate"),t.qZA()()),2&a&&(t.xp6(2),t.Oqu(t.lcZ(3,6,"LABELS.OWNER_NAME")),t.xp6(3),t.Oqu(t.lcZ(6,8,"LABELS.REAL_ESTATE_NAME")),t.xp6(3),t.Oqu(t.lcZ(9,10,"CONTRACTS.TENANT_NAME")),t.xp6(3),t.Oqu(t.lcZ(12,12,"PROPERTY.UNIT_NUMBER")),t.xp6(3),t.Oqu(t.lcZ(15,14,"LABELS.CODE")),t.xp6(3),t.Oqu(t.lcZ(18,16,"ACTIONS.ACTIONS")))}function Ot(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td",11)(12,"button",12),t._UZ(13,"i",13),t.qZA(),t.TgZ(14,"mat-menu",11,14)(16,"button",15),t.NdJ("click",function(){const i=t.CHM(e).$implicit,c=t.oxw(2);return t.KtG(c.handleRemoveContract(i.id))}),t._uU(17),t.ALo(18,"translate"),t.qZA()()()()}if(2&a){const e=r.$implicit,n=t.MAs(15);t.xp6(2),t.hij(" ",null==e?null:e.owner," "),t.xp6(2),t.hij(" ",null==e?null:e.realEstateName," "),t.xp6(2),t.hij(" ",null==e?null:e.tenant," "),t.xp6(2),t.hij(" ",null==e?null:e.propertyNumber," "),t.xp6(2),t.hij(" ",null==e?null:e.code," "),t.xp6(2),t.Q6J("matMenuTriggerFor",n),t.xp6(5),t.Oqu(t.lcZ(18,7,"ACTIONS.DELETE"))}}function Zt(a,r){}function vt(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"data-table",7),t.NdJ("pageChange",function(o){t.CHM(e);const i=t.oxw();return t.KtG(i.onPageChange(o))}),t.ALo(1,"async"),t.YNc(2,ht,19,18,"ng-template",null,8,t.W1O),t.YNc(4,Ot,19,9,"ng-template",null,9,t.W1O),t.YNc(6,Zt,0,0,"ng-template",null,10,t.W1O),t.qZA()}if(2&a){const e=t.oxw();t.Q6J("dataSource",t.lcZ(1,1,e.propertyTable$))}}const yt=function(){return["/contracts/add-contract"]},Et=[{title:"Contracts",path:"",children:[{title:"Contracts",path:"",component:(()=>{class a{constructor(e,n,o){this.translationService=e,this.contractsLogicService=n,this.dialog=o,this.propertyTable$=(0,Q.of)({data:[],length:0,pageSize:0,pageIndex:0,emptyState:"No Data Found!"}),this.contractPagingPayload={pagedSearch:{pageIndex:1,pageSize:16}}}get InputTypes(){return S.o}ngOnInit(){this.searchContracts(),this.translationService.currentLanguage$.subscribe(e=>{this.currentLang=e})}onPageChange(e){this.contractPagingPayload.pagedSearch.pageIndex=e.pageIndex+1,this.searchContracts()}handleRemoveContract(e){return this.dialog.open(At.$,{maxWidth:"550px",minWidth:"500px",data:{title:"ACTIONS.DELETE_CONTRACT",message:"LABELS.FORM.ARE_YOU_SURE",actionLabel:"ACTIONS.DELETE"}}).afterClosed().subscribe(i=>{if(!i)return i;this.contractsLogicService.deleteContract(e).subscribe(c=>{this.searchContracts()})})}searchContracts(){this.contractsLogicService.searchContracts(this.contractPagingPayload).subscribe(e=>{this.propertyTable$=(0,Q.of)({data:e.items,length:e.items.length,pageSize:8,pageIndex:1,emptyState:"LABELS.NO_DATA"})})}get Lang(){return x.U}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(U.D),t.Y36(b),t.Y36(M.uw))},a.\u0275cmp=t.Xpm({type:a,selectors:[["contracts-listing"]],decls:12,vars:9,consts:[[1,"page-container","contracts-listing"],[1,"page-header"],[1,"btn-wrapper"],[1,"ac-btn","btn-fill",3,"routerLink"],[1,"page-content"],[1,"table-wrapper"],["class","preview__table",3,"dataSource","pageChange",4,"ngIf"],[1,"preview__table",3,"dataSource","pageChange"],["tableHead",""],["tableRows",""],["loaderRef",""],["RtlDir",""],["mat-button","",3,"matMenuTriggerFor"],[1,"fa-solid","fa-ellipsis"],["menu","matMenu"],["mat-menu-item","","RtlDir","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",2)(6,"button",3),t._uU(7),t.ALo(8,"translate"),t.qZA()()(),t.TgZ(9,"div",4)(10,"section",5),t.YNc(11,vt,8,3,"data-table",6),t.qZA()()()),2&e&&(t.xp6(3),t.Oqu(t.lcZ(4,4,"LABELS.CONTRACTS")),t.xp6(3),t.Q6J("routerLink",t.DdM(8,yt)),t.xp6(1),t.hij(" ",t.lcZ(8,6,"CONTRACTS.ADD_NEW_CONTRACT")," "),t.xp6(4),t.Q6J("ngIf",n.propertyTable$))},dependencies:[T.O5,ft.lW,L.VK,L.OP,L.p6,q.C,_t.Q,h.rH,T.Ov,v.X$],styles:[".table-wrapper[_ngcontent-%COMP%]{min-height:200px}"]}),a})()},{title:"Add Contract",path:"add-contract",component:Y},{title:"Contract Details",path:"details/:id",component:Y}]}];let Nt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[h.Bz.forChild(Et),h.Bz]}),a})();var It=l(2271);let Dt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[T.ez,v.aw,It.m,Nt]}),a})()}}]);