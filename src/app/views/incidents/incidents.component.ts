import { Component } from '@angular/core';
import { DashboardChartsData, IChartProps } from '../dashboard/dashboard-charts-data';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
  declaration: Date;
  description: String;
  type: String;
}

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent {

  constructor(private chartsData: DashboardChartsData) {
  }

  data = {
    description:'',
    type:''
  }

  public users: IUser[] = [
    // {
    //   name: 'Rakoto',
    //   state: 'New',
    //   registered: 'Jan 1, 2021',
    //   country: 'Us',
    //   usage: 50,
    //   period: 'Jun 11, 2021 - Jul 10, 2021',
    //   payment: 'Mastercard',
    //   activity: '10 sec ago',
    //   avatar: './assets/img/avatars/1.jpg',
    //   status: 'success',
    //   color: 'success',
    //   declaration: new Date(),
    //   description:'',
    //   type: 'vol'
    // },
    // {
    //   name: 'Avram Tarasios',
    //   state: 'Recurring ',
    //   registered: 'Jan 1, 2021',
    //   country: 'Br',
    //   usage: 10,
    //   period: 'Jun 11, 2021 - Jul 10, 2021',
    //   payment: 'Visa',
    //   activity: '5 minutes ago',
    //   avatar: './assets/img/avatars/2.jpg',
    //   status: 'danger',
    //   color: 'info',
    //         declaration: new Date(),
    //   description:'',
    //   type: 'accident'
    // },
    // {
    //   name: 'Quintin Ed',
    //   state: 'New',
    //   registered: 'Jan 1, 2021',
    //   country: 'In',
    //   usage: 74,
    //   period: 'Jun 11, 2021 - Jul 10, 2021',
    //   payment: 'Stripe',
    //   activity: '1 hour ago',
    //   avatar: './assets/img/avatars/3.jpg',
    //   status: 'warning',
    //   color: 'warning',
    //         declaration: new Date(),
    //   description:'',
    //   type: 'vol'
    // },
    // {
    //   name: 'Enéas Kwadwo',
    //   state: 'Sleep',
    //   registered: 'Jan 1, 2021',
    //   country: 'Fr',
    //   usage: 98,
    //   period: 'Jun 11, 2021 - Jul 10, 2021',
    //   payment: 'Paypal',
    //   activity: 'Last month',
    //   avatar: './assets/img/avatars/4.jpg',
    //   status: 'secondary',
    //   color: 'danger',
    //         declaration: new Date(),
    //   description:'',
    //   type: 'vol'
    // },
    // {
    //   name: 'Agapetus Tadeáš',
    //   state: 'New',
    //   registered: 'Jan 1, 2021',
    //   country: 'Es',
    //   usage: 22,
    //   period: 'Jun 11, 2021 - Jul 10, 2021',
    //   payment: 'ApplePay',
    //   activity: 'Last week',
    //   avatar: './assets/img/avatars/5.jpg',
    //   status: 'success',
    //   color: 'primary',
    //         declaration: new Date(),
    //   description:'',
    //   type: 'perte'
    // },
    // {
    //   name: 'Friderik Dávid',
    //   state: 'New',
    //   registered: 'Jan 1, 2021',
    //   country: 'Pl',
    //   usage: 43,
    //   period: 'Jun 11, 2021 - Jul 10, 2021',
    //   payment: 'Amex',
    //   activity: 'Yesterday',
    //   avatar: './assets/img/avatars/6.jpg',
    //   status: 'info',
    //   color: 'dark',
    //         declaration: new Date(),
    //   description:'',
    //   type: 'perte'
    // }
  ];

  public toShow: IUser[] = [
    {
      name: 'Rakoto',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Us',
      usage: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Mastercard',
      activity: '10 sec ago',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success',
      declaration: new Date('01/01/2023'),
      description:'',
      type: 'vol'
    },
    {
      name: 'Avram Tarasios',
      state: 'Recurring ',
      registered: 'Jan 1, 2021',
      country: 'Br',
      usage: 10,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Visa',
      activity: '5 minutes ago',
      avatar: './assets/img/avatars/2.jpg',
      status: 'danger',
      color: 'info',
            declaration: new Date('03/15/2022'),
      description:'',
      type: 'accident'
    },
    {
      name: 'Quintin Ed',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'In',
      usage: 74,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Stripe',
      activity: '1 hour ago',
      avatar: './assets/img/avatars/3.jpg',
      status: 'warning',
      color: 'warning',
            declaration: new Date('05/15/2022'),
      description:'',
      type: 'vol'
    },
    {
      name: 'Enéas Kwadwo',
      state: 'Sleep',
      registered: 'Jan 1, 2021',
      country: 'Fr',
      usage: 98,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Paypal',
      activity: 'Last month',
      avatar: './assets/img/avatars/4.jpg',
      status: 'secondary',
      color: 'danger',
            declaration: new Date('05/20/2023'),
      description:'',
      type: 'vol'
    },
    {
      name: 'Agapetus Tadeáš',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Es',
      usage: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'ApplePay',
      activity: 'Last week',
      avatar: './assets/img/avatars/5.jpg',
      status: 'success',
      color: 'primary',
            declaration: new Date('07/04/2023'),
      description:'',
      type: 'perte'
    },
    {
      name: 'Friderik Dávid',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Pl',
      usage: 43,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Amex',
      activity: 'Yesterday',
      avatar: './assets/img/avatars/6.jpg',
      status: 'info',
      color: 'dark',
            declaration: new Date('07/23/2023'),
      description:'',
      type: 'perte'
    }
  ];

  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
    if (!this.users.length) {
      this.users = this.toShow;
      localStorage.setItem("users", JSON.stringify(this.users));
    }
  }

  public aa: any = '';

  add(){

    // this.aa = localStorage.getItem('users')


    this.users.push({
      name: 'Rakoto',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Us',
      usage: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Mastercard',
      activity: '10 sec ago',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success',
      declaration: new Date(),
      description:this.data.description,
      type: this.data.type
    })

    localStorage.setItem("users", JSON.stringify(this.users));

  }

  delete(user: any) {
    this.remove(user);
  }

  remove(user: any) {
    this.users.splice(user, 1);

  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }

}
