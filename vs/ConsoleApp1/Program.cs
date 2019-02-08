using Ooui;

using Xamarin.Forms;
using App1;
namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Forms.Init();

            var mainPage = new MainPage();
            UI.Publish("/", mainPage.GetOouiElement());
        }
    }
}
