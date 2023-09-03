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
  mail: string;
  naissance: string;
  numero: string;

}

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent {

  constructor(private chartsData: DashboardChartsData) {
  }

  public users: IUser[] = [
    {
      name: 'Rakotoharinjatovo kiady',
      state: 'New',
      registered: 'Sep 3, 2023',
      country: 'Us',
      usage: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Mastercard',
      activity: '10 sec ago',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success',
      mail: 'kikirkt11@yahoo.com',
      naissance: '',
      numero: '0345856923'
    },
    {
      name: 'Avram Tarasios',
      state: 'Recurring ',
      registered: 'Sep 3, 2023',
      country: 'Br',
      usage: 10,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Visa',
      activity: '5 minutes ago',
      avatar: './assets/img/avatars/2.jpg',
      status: 'danger',
      color: 'info',
      mail: 'Avram@gmail.com',
      naissance: '08/12/1988',
      numero: '0326577789'
    },
    {
      name: 'Quintin Ed',
      state: 'New',
      registered: 'Sep 3, 2023',
      country: 'In',
      usage: 74,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Stripe',
      activity: '1 hour ago',
      avatar: './assets/img/avatars/3.jpg',
      status: 'warning',
      color: 'warning',
      mail: 'Quintin@yahoo.com',
      naissance: '11/12/1992',
      numero: ''
    },
    {
      name: 'Enéas Kwadwo',
      state: 'Sleep',
      registered: 'Sep 3, 2023',
      country: 'Fr',
      usage: 98,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Paypal',
      activity: 'Last month',
      avatar: './assets/img/avatars/4.jpg',
      status: 'secondary',
      color: 'danger',
      mail: 'Enéas@gmail.com',
      naissance: '',
      numero: '0343865023'
    },
    {
      name: 'Agapetus Tadeáš',
      state: 'New',
      registered: 'Sep 3, 2023',
      country: 'Es',
      usage: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'ApplePay',
      activity: 'Last week',
      avatar: './assets/img/avatars/5.jpg',
      status: 'success',
      color: 'primary',
      mail: 'Agapetus@gmail.com',
      naissance: '',
      numero: ''
    },
    {
      name: 'Friderik Dávid',
      state: 'New',
      registered: 'Sep 3, 2023',
      country: 'Pl',
      usage: 43,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Amex',
      activity: 'Yesterday',
      avatar: './assets/img/avatars/6.jpg',
      status: 'info',
      color: 'dark',
      mail: 'Friderik@yahoo.com',
      naissance: '12/12/1980',
      numero: '0385023369'
    }
  ];
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
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
